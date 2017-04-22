from flask import Flask, render_template
app = Flask(__name__)


@app.route("/")
def main(methods=['GET''POST']):
    return render_template('login.html')

if __name__ == "__main__":
    app.run(host='localhost', port=8000, debug=True)