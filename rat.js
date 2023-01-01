var maze;

      var mazeobject = document.getElementById("mazebox");
      var ratshow = document.getElementById("container");
      var size = document.getElementById("val").value;
      maze = [];
      var smaze = [];
      var track=[];
      var manage=[];
     

      function initialize() {

        var x = document.getElementById("val").value;

        var table = document.createElement("table");

        for (var i = 0; i < x; i++) {
          var tabler = document.createElement("tr");
          for (var j = 0; j < x; j++) {
            var tabled = document.createElement("td");
            var butt = document.createElement("button");
            var num = "rcol" + i + j;
            var num1="col"+i+j;
            butt.setAttribute("id", num1);
            butt.setAttribute("style", "width: 100%;color:white;background-color:green;  cursor: pointer;");
            tabled.setAttribute("style", "background-color:green");
            tabled.setAttribute("id", num);
            butt.setAttribute("onclick", "fun(this.id)");
            var pos=document.createTextNode("G");
            butt.append(pos);
            tabled.append(butt);

            tabler.append(tabled);
          }
          table.append(tabler);
        }
        mazeobject.append(table);
        for (var i = 0; i < x; i++) {
          for (var j = 0; j < x; j++) {
            var gcolor = "col" + i + j;
            document.getElementById(gcolor).style.backgroundColor = "green";
          }
        }
        
        document.getElementById("ch").style.visibility="visible";
        document.getElementById("wordd").style.visibility="visible";


      }




      function fun(data) {
        var dat = data;
        var dat1="r"+data;
        var rang= document.getElementById(dat).style.backgroundColor;
        if(rang=="green"){

          document.getElementById(dat).style.backgroundColor = "red";
          document.getElementById(dat1).style.backgroundColor = "red";
          document.getElementById(dat).innerHTML="R";

        }else{
          document.getElementById(dat).style.backgroundColor = "green";
          document.getElementById(dat1).style.backgroundColor = "green";
          document.getElementById(dat).innerHTML="G";
        }
      }




      function startMove() {
        document.getElementById("worrdd").style.visibility="visible";
        document.getElementById("rep").style.visibility="visible";


        var n = document.getElementById("val").value;
        for (var k = 0; k < n; k++) {
          var m = document.getElementById("val").value;

          var arr1 = new Array(n);
          var arr2 = new Array(n);
          for (var l = 0; l < n; l++) {
            var checkCol = "col" + k + l;
            var rang = document.getElementById(checkCol).style.backgroundColor;

            if (rang == "green") {
              arr1[l] = parseInt(1);
            } else {
              arr1[l] = parseInt(0);
            }
            arr2[l] = 0;
          }
          smaze.push(arr2);
          maze.push(arr1);
        }

       


        var ratmove = document.createElement("div");
        var rattable = document.createElement("table");
        for (var i = 0; i < n; i++) {
            var ratrow = document.createElement("tr");
            for (var j = 0; j < n; j++) {
              var ratdata = document.createElement("td");
              var num="rat"+i+j;
              var val=document.createTextNode("RR");
              ratdata.append(val);
              ratdata.setAttribute("id",num);
              ratdata.setAttribute("style","color:blue");
              ratrow.append(ratdata);
            }
            rattable.append(ratrow);
            ratmove.append(rattable);
           
            ratshow.append(ratmove);
          }
          for(var k=0;k<n;k++){
            for(var l=0;l<n;l++){
                var Col="rat"+k+l;
                if(maze[k][l]==1){
                    document.getElementById(Col).style.backgroundColor="blue";
                }else{
                    document.getElementById(Col).style.backgroundColor="red";
                    document.getElementById(Col).style.color="red";
                }
            }
          }
      

          rat(0,0);


          setTimeout(traverse,2000,0);


      }


     



      function traverse(v){
          if(v>track.length){
            return;
          }
          if(manage[v]==1){
            document.getElementById(track[v]).style.backgroundColor="green";
            document.getElementById(track[v]).style.color="green";
          }
          else{
          
            document.getElementById(track[v]).style.backgroundColor="yellow";
            document.getElementById(track[v]).style.color="yellow";
          }
          setTimeout(traverse,1000,v+1);

      }


      function safe(x, y) {

        var n = document.getElementById("val").value;
        if (x < n && y < n && maze[x][y] == 1) {
          return 1;
        } else {
          return 0;
        }
      }

     


      function rat(x, y) {
        
        var n = document.getElementById("val").value;
        if (x == n - 1 && y == n - 1) {
         
            var control3="rat"+x+y;
            track.push(control3);
            manage.push(1);
          smaze[x][y] = 1;
          return 1;
        }

        
        var check = safe(x, y);
        if (check == 1) {
         

            
          smaze[x][y] = 1;
          var control="rat"+x+y;
          track.push(control);
          manage.push(1);
          
        
          
          

          var rec=rat(x+1,y);
          if (rec == 1) {
            
            return 1;
          }
          
          
          var rec2=rat(x,y+1)
          if (rec2== 1) {
           
            return 1;
          }
        
          
       
        var control2="rat"+x+y;
        track.push(control2);
        manage.push(0);
        smaze[x][y] = 0;
        
        
        return 0;
      } else {
        
          return 0;
        }
      }