
			//////////////////////////////////////////////////////////////
			//////////////////////// Set-Up //////////////////////////////
			//////////////////////////////////////////////////////////////

			var margin = {top: 100, right: 100, bottom: 100, left: 100},
				width = Math.min(600, window.innerWidth - 10) - margin.left - margin.right,
				height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

			//////////////////////////////////////////////////////////////
			////////////////////////// Data //////////////////////////////
			//////////////////////////////////////////////////////////////

			var data = [
					  [//ROUGE
						{axis:"TVA 2,1%",value:424000},
						{axis:"TVA 5,5%",value:231000},
						{axis:"TVA 10%",value:441521},
						{axis:"TVA 20%",value:143122},
					  ],[//BLEU
						{axis:"TVA 2,1%",value:383445},
						{axis:"TVA 5,5%",value:401141},
						{axis:"TVA 10%",value:231441},
						{axis:"TVA 20%",value:251543},
					  ]
					];
			//////////////////////////////////////////////////////////////
			//////////////////// Draw the Chart //////////////////////////
			//////////////////////////////////////////////////////////////

			var color = d3.scale.ordinal()
				.range(["#CC333F","#067ab4"]);

			var radarChartOptions = {
			  w: width,
			  h: height,
			  margin: margin,
			  maxValue: 500000,
			  levels: 5,
			  roundStrokes: true,
			  color: color
			};
			//Call function to draw the Radar chart
			RadarChart(".radarChart-2", data, radarChartOptions);

