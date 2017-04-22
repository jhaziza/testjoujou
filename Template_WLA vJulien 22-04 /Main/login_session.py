from flask import Flask, Response, redirect, url_for, request, session, abort, render_template,flash
from flask.ext.login import LoginManager, UserMixin, login_required, login_user, logout_user

app = Flask(__name__)

# config
app.config.update(
    DEBUG=True,
    SECRET_KEY='secret_xxx'
)

# flask-login
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "login"


# silly user model
class User(UserMixin):
    def __init__(self, id):
        self.id = id
        self.name = "user" + str(id)
        self.password = self.name + "_secret"

    def __repr__(self):
        return "%d/%s/%s" % (self.id, self.name, self.password)


# create some users with ids 1 to 20
users = [User(id) for id in range(1, 21)]


# some protected url
@app.route('/main')
#@login_required
def home():
    return render_template("main.html")


# somewhere to login
@app.route("/", methods=["GET", "POST"])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if password == username + "_secret":
            id = username.split('user')[1]
            user = User(id)
            login_user(user)
            #return redirect(request.args.get("home(user)"))
            return render_template('main.html')
        else:
            return abort(401)
    else:
        return render_template('login.html')


# somewhere to logout
@app.route("/logout", methods=["GET", "POST"])
#@login_required
def logout():
    logout_user()
    return render_template('logout.html')

@app.route("/test")
@login_required
def test():
    return render_template('test.html')



# handle login failed
@app.errorhandler(401)
def page_not_found(e):
   return render_template('login.html')


# callback to reload the user object
@login_manager.user_loader
def load_user(userid):
    return User(userid)


if __name__ == "__main__":
    app.run(host='localhost', port=8000, debug=True)