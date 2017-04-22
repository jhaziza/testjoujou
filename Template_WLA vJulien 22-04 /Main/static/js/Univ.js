  var data_Univ =
  [
{               "metric":"MB",
				"label": "Nature",
				"value": 105,
				"color": "#49a942"
			},
			{
			    "metric":"MB",
				"label": "Beauté",
				"value": 829,
				"color": "#fd5c63"
			},
			{
			    "metric":"MB",
				"label": "Matériel",
				"value": 470,
				"color": "#ffd900"
			},
			{
			    "metric":"MB",
				"label": "Médicament et Santé",
				"value": 910,
				"color": "#ff6a00"
			},
			{
			    "metric":"MB",
				"label": "Orthopédie et Confort",
				"value": 680,
				"color": "#d7d7d8"
			},
			{
			    "metric":"MB",
				"label": "Bébé",
				"value": 209,
				"color": "#0099e5"
			},
            {
                "metric":"CA",
				"label": "Nature",
				"value": 1052,
				"color": "#49a942"
			},
			{
			    "metric":"CA",
				"label": "Beauté",
				"value": 10199,
				"color": "#fd5c63"
			},
			{
			    "metric":"CA",
				"label": "Matériel",
				"value": 1080,
				"color": "#ffd900"
			},
			{
			    "metric":"CA",
				"label": "Médicament et Santé",
				"value": 10299,
				"color": "#ff6a00"
			},
			{
			    "metric":"CA",
				"label": "Orthopédie et Confort",
				"value": 1400,
				"color": "#d7d7d8"
			},
			{
			    "metric":"CA",
				"label": "Bébé",
				"value": 450,
				"color": "#0099e5"
			}
		];

var dataFiltered_Univ = data_Univ.filter(function (d) { return d.metric === 'MB' });

 pieUniv  = new d3pie("Univ", {/*
	"header": {
		"title": {
			"text": "Répartition du Chiffre d'affaire par Univers",
			"color": "#ffffff",
			"fontSize": 24,
			"font": "open sans"
		},
		"subtitle": {
			"text": "Voici comment se décompose le CA (€) par Univers",
			"color": "#999999",
			"fontSize": 12,
			"font": "open sans"
		},
		"titleSubtitlePadding": 9
	},*/
	"footer": {
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 690,
		"pieInnerRadius": "24%",
		"pieOuterRadius": "93%"
	},
	"data": {
	    "sortOrder": "value-desc",
		"content": dataFiltered_Univ
	},
	"labels": {
		"outer": {
			"format": "label-value1",
			"pieDistance": 32
		},

		"inner": {
			"hideWhenLessThanPercentage": 3
		},
		"mainLabel": {
			"color": "#000",
			"fontSize": 11
		},
		"percentage": {
			"color": "#ffffff",
			"decimalPlaces": 0
		},
		"value": {
			"color": "#adadad",
			"fontSize": 11
		},
		"lines": {
			"enabled": true
		},
		"truncation": {
			"enabled": false
		}
	},
	"effects": {
	    "load":{
	    "speed":800
	    },
		"pullOutSegmentOnClick": {
			"effect": "elastic",
			"speed": 280,
			"size": 12
		}
	},
	"misc": {
		"gradient": {
			"enabled": true,
			"percentage": 200
		}
	},


"callbacks": {}
});
//$('pie').append();



function updateData_Univ(value) {
dataFiltered_Univ    = data_Univ.filter(function (d) { return d.metric === value })

if (value=="MB"){
label = "Marge brute"
} else {
label = "Chiffre d'affaires"
}
pieUniv.destroy();
pieUniv =null;
 pieUniv = new d3pie("Univ", {
	"header": {
		"title": {
			"text": label + " // Répartition par Univers",
			"color": "#000",
			"fontSize": 24,
			"font": "open sans"
		},
		"subtitle": {
			"text": "Voici la décomposition (%) par Univers",
			"color": "#999999",
			"fontSize": 12,
			"font": "open sans"
		},
		"titleSubtitlePadding": 9
	},
	"footer": {
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 690,
		"pieInnerRadius": "24%",
		"pieOuterRadius": "93%"
	},
	"data": {
	    "sortOrder": "value-desc",
		"content": dataFiltered_Univ
	},
	"labels": {
		"outer": {
			"format": "label-value1",
			"pieDistance": 32
		},

		"inner": {
			"hideWhenLessThanPercentage": 3
		},
		"mainLabel": {
			"color": "#000",
			"fontSize": 11
		},
		"percentage": {
			"color": "#ffffff",
			"decimalPlaces": 0
		},
		"value": {
			"color": "#adadad",
			"fontSize": 11
		},
		"lines": {
			"enabled": true
		},
		"truncation": {
			"enabled": false
		}
	},
	"effects": {
	    "load":{
	    "speed":800
	    },
		"pullOutSegmentOnClick": {
			"effect": "elastic",
			"speed": 280,
			"size": 12
		}
	},
	"misc": {
		"gradient": {
			"enabled": true,
			"percentage": 200
		}
	},


"callbacks": {}
});
//$('pie').append();





// Pareto Chart //
var resultUNIV = dataFiltered_Univ.map(function(a) {return a.value;});
function compareNumbers(a, b)
{
    return b - a ;
}

var dataparetoUNIV = resultUNIV.sort(compareNumbers);
var dataSumUNIV = [];
var pourcUniv = [];
for (var i=0;i < dataparetoUNIV.length;i++) {
 if(i == 0) {
    dataSumUNIV[0] = dataparetoUNIV[0]
}
else {
dataSumUNIV[i] = dataSumUNIV[i-1] + dataparetoUNIV[i]

}
}
var max = Math.max.apply(Math, dataSumUNIV);

for (var i=0;i < dataSumUNIV.length;i++) {
pourcUniv[i] = 100*(dataSumUNIV[i]/max)
}


var pareto = Highcharts.chart('paretoUNIV', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: label +'// Valeur (€) et contribution cumulée  des Univers (%)'
    },
    subtitle: {
        text: ''
    },
    /*xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    }],*/
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value} %',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        max: 100,
        title: {
            text: 'Valeur',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: 'Contribution marginale',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} €',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        x: 120,
        verticalAlign: 'top',
        y: 100,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
    },
    series: [{
        name: 'Contribution // Pourcentage cumule',
        type: 'column',
        yAxis: 1,
        data: dataparetoUNIV,
        tooltip: {
            valueSuffix: '€'
        }

    }, {
        name: 'Valeur',
        type: 'spline',
        data: pourcUniv,
        tooltip: {
            valueSuffix: '%'
        }
    }]
});
pareto.setSize(1200, 600);
   };




			    var dataTableUNIV = [["MB",
				"Hygiène Dentaire",
				1892,
				"#2484c1"]];

$(document).ready(function() {
    $('#UNIVTable').DataTable( {
     autoFill: true,
        data: dataTableTVA,
        columns: [
            { title: "Metric" },
            { title: "Catégorie" },
            { title: "Valeur (€) " }        ]
    } );
} );


