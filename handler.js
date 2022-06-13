let web3=solanaWeb3;
var stakeary =[{"wallet":"HWYEVazPjPbUTHYspcCCvq6wuGvdJQCKZr8DrZht5FBp","fcol":"name<br>version","voteacc":"GrukZGwuvQdB6wszywwaxCj9tkKY7x1U4WPto5wvTGKD","amount":"299771712","hash":"4wKAcikWnBq2PTQj4NQYwmGUiXjhpeAqyvUauAimpCics5Y8omTZz64jhJvcEJk69m9MKaBRZz6GqJtR3NjG2r7j"}],interimlist=[];
var newstkary=[];
var wallname = "";
var epoch;
var rewardsary=[];
var dnamelist=[];
var dasnlist=[],dnameary=[];
var liststrary=[];
var stakebalary=[];
var txnary=[];
var verlist=[];
var verfreq=[];
var stkcount=0;
var balance = 0;
var lampsper=0;
var totalstake = 0;
var lstvar=0;
var pkey;
var vallist=[];
var vinfo=0;
var vname = "";
var table,stktable,newtable,txntable;
var colps=0;
var dname=false,dconc=false,dasn=false,skipchk=false,votechk=false,apyfilter=false,ahist=false,ccomm=false,chist=false,ver=false,sname=false,astake=false,delichk=false;
let connection = new web3.Connection(web3.clusterApiUrl('mainnet-beta'));

async function con_wall()
{
    
{
   
   
 $('#verlist')
                         .append($("<option></option>")
                         .attr("value", "Select")
                         .text("Select"));
 $('#dasnlist')
                         .append($("<option></option>")
                         .attr("value", "Select")
                         .text("Select")); 

 {
     $('#card').hide();
     $('#snackbarwrap').hide();
      $('#navbar').show();
     $('#welcomecard').show();
      $('#loadingscreen').show();
      if(pkey==""||pkey==null)
      {
           $('#balid').html("0 SOL");
      }
      else
      {
        balance = await connection.getBalance(pkey);
        $('#loaddesc').html("Getting balance");
        balance=Math.round(balance/1000000);
        $('#balid').html(balance/1000+" Sol");
      }
        lampsper=web3.LAMPORTS_PER_SOL;
      // $('#validatorscreen').show();
       $('#loaddesc').html("Getting epoch");
       var epochobj=await connection.getEpochInfo();
       epoch=epochobj.epoch;
       $('#epid').html(epoch);
       //alert(epoch);
       var apylist=[];
       $('#loaddesc').html("Getting Vote accounts");
       var stary = await connection.getVoteAccounts();
        sttry=stary.delinquent
       stary = stary.current;
       for(var i=0;i<stary.length;i++)
    {
       totalstake=totalstake+(stary[i].activatedStake/web3.LAMPORTS_PER_SOL);
    }
     for(var j=0;j<sttry.length;j++)
    {
      // totalstake=totalstake+(stary[j].activatedStake/web3.LAMPORTS_PER_SOL);
    }
     $('#tstake').html(numberWithCommas(Math.round(totalstake))+" Sol");
    //alert(totalstake);
         var proceed=0;
         $('#loaddesc').html("Getting Validator details");
         if(pkey==""||pkey==null)
         $('#wallet').html("<br>Wallet not connected.");
        else
       $('#wallet').html(pkey.toString());
           $.ajax({ url: "https://stagnum.finance/data.json",
        context: document.body,
        success: function(data, status){
            const obj = (data);
   var stu=status;
   
    if(stu=="success")
         {
             
             var vlist= obj.array;
             
             
             
           for(var i = 0; i < vlist.length; i++)
           {
               var templist = {};
                      var z=0;var o=-1;var t=-2;
                if(vlist[i].datascore==z){
                 templist['concentration']="Low";
                 templist['cstring']="<div style=\"color:#0ad90a\">Low</div>";}
                 else if(vlist[i].datascore==o)
                 {
                 templist['concentration']="High";
                 templist['cstring']="<div style=\"color:orange\">High</div>";}
                 else
                {
                 templist['concentration']="Very High";
                 templist['cstring']="<div style=\"color:red\">Very High</div>";}
                templist['percent']=vlist[i].commission+" %<br>"+Math.round(vlist[i].apy*1000)/10+" %<br><div style=\"color:#0ad90a\">"+vlist[i].chist+"</div>";
               
                templist['asn']=vlist[i].asn;
                templist['datacenter']=vlist[i].datacenter;
                  
             
                 if(jQuery.inArray(vlist[i].version, verlist) != -1) {
                  
                   if(verfreq["\""+vlist[i].version+"\""]==null||verfreq["\""+vlist[i].version+"\""]=="NaN")
                    verfreq["\""+vlist[i].version+"\""]=0;
                    else
                    {
                   verfreq["\""+vlist[i].version+"\""]=verfreq["\""+vlist[i].version+"\""]+1;
                    }
                   
                } else {
                         $('#verlist')
                         .append($("<option></option>")
                         .attr("value", vlist[i].version)
                         .text(vlist[i].version)); 
                         verlist.push(vlist[i].version);
                        } 
               if(jQuery.inArray(vlist[i].datacenter, dnamelist) != -1) {
                  
                } else {
                    var liststr="<label for=\"chk"+lstvar+"\"><input type=\"checkbox\" class=\"chklst\" onclick=\"labelfunc(this);\" id=\"chk"+lstvar+"\" />"+vlist[i].datacenter+"</label>";
                         $('#checkBoxes').append($(liststr)); 
                         liststrary.push(liststr);
                         dnamelist.push(vlist[i].datacenter);
                         lstvar++;
                        } 
                if(jQuery.inArray(vlist[i].asn, dasnlist) != -1) {
                  
                } else {
                         $('#dasnlist')
                         .append($("<option></option>")
                         .attr("value", vlist[i].asn)
                         .text(vlist[i].asn)); 
                         dasnlist.push(vlist[i].asn);
                        } 
         
                templist['dcenter']="<a href=\"https://mxtoolbox.com/SuperTool.aspx?action=asn%3a"+vlist[i].asn+"&run=toolpage\"class=\"imgcol1\">"+vlist[i].datacenter+"</a>";
                templist['chistory']=vlist[i].chist;
                templist['version']=vlist[i].version;
                templist['pstake']=vlist[i].poolstake;
                if(templist['pstake']=="yes")
                {
                    var pstr="";
                    templist['poollist']=vlist[i].poollist;
                   
                      
                    
                }
                else
                {
                     templist['poollist']=["No stake from pools"];
                }
                templist['name']=vlist[i].name;
                templist['img']=(vlist[i].img);
                templist['commission']=vlist[i].commission;
                templist['identity']=vlist[i].identity;
                templist['delinquent']=vlist[i].delinquent;
                if(templist['delinquent']=="Nil")
                templist['delinquent']="false";
                else{
                 templist['delinquent']="true";
                }
                templist['vperf']=vlist[i].votescore;
                templist['srate']=vlist[i].skiprate;
                if(templist['vperf']==0)
                {
                    templist['vperf']="Low";
                    templist['vstring']= "<div style=\"color:red\">Low</div>";
                }
                else if(templist['vperf']==1)
                {
                    templist['vperf']="High";
                    templist['vstring']=  "<div style=\"color:orange\">High</div>";
                }
                else if (templist['vperf']==2)
                {
                    templist['vperf']="Very High";
                    templist['vstring']= "<div style=\"color:#0ad90a\">Very High</div>";
                }
                else
                {
                    
                }
                 templist['stakec']= numberWithCommas(Math.round(vlist[i].stake/10));
                 templist['stake']= Math.round(vlist[i].stake/10);
                  templist['apy']=Math.round(vlist[i].apy*1000)/10;
                  templist['voteacc']=vlist[i].voteacc;
                
                
           }
           
           vallist=interimlist;
         
          for (const [key, value] of Object.entries(verfreq)) {
              if(value>vinfo){
                  vinfo=value;
                  vname=key;
                  }}
                   $('#versionid').html("(Popular Version : "+JSON.parse(vname)+")");
          
           $('#dconclist')
                         .append($("<option></option>")
                         .attr("value", "Select")
                         .text("Select"));
           $('#dconclist')
                         .append($("<option></option>")
                         .attr("value", "Low")
                         .text("Low")); 
           $('#dconclist')
                         .append($("<option></option>")
                         .attr("value", "High")
                         .text("High")); 
            $('#dconclist')
                         .append($("<option></option>")
                         .attr("value", "Very High")
                         .text("Very High")); 
            $('#stakelist')
                         .append($("<option></option>")
                         .attr("value", "Select")
                         .text("Select"));              
            $('#stakelist')
                         .append($("<option></option>")
                         .attr("value", "Yes")
                         .text("yes")); 
             $('#stakelist')
                         .append($("<option></option>")
                         .attr("value", "No")
                         .text("no")); 
            $('#chlist')
                         .append($("<option></option>")
                         .attr("value", "Select")
                         .text("Select")); 
             $('#chlist')
                         .append($("<option></option>")
                         .attr("value", "No change")
                         .text("No change")); 
             $('#chlist')
                         .append($("<option></option>")
                         .attr("value", "Commission increased")
                         .text("Commission increased"));
            $('#chlist')
                         .append($("<option></option>")
                         .attr("value", "Commission decreased")
                         .text("Commission decreased"));
                         
            $('#apylist')
                         .append($("<option></option>")
                         .attr("value", "Select")
                         .text("Select"));
            $('#apylist')
                         .append($("<option></option>")
                         .attr("value", "Yes")
                         .text("Yes")); 
             $('#apylist')
                         .append($("<option></option>")
                         .attr("value", "No")
                         .text("No")); 
             $('#vperf')
                         .append($("<option></option>")
                         .attr("value", "Select")
                         .text("Select")); 
             
             $('#vperf')
                         .append($("<option></option>")
                         .attr("value", "Low")
                         .text("Low")); 
                         
             $('#vperf')
                         .append($("<option></option>")
                         .attr("value", "High")
                         .text("High")); 
            $('#vperf')
                         .append($("<option></option>")
                         .attr("value", "Very High")
                         .text("Very High")); 
             $('#deli')
                         .append($("<option></option>")
                         .attr("value", "Select")
                         .text("Select")); 
                         
             $('#deli')
                         .append($("<option></option>")
                         .attr("value", "true")
                         .text("true")); 
            $('#deli')
                         .append($("<option></option>")
                         .attr("value", "false")
                         .text("false")); 
            $('#loaddesc').html("Applying changes to table");
             newtable =  $('#newtable').DataTable({data : newstkary,columns: [
            { data: "fcol" },
            //{ data: "img" },
            { data: "voteacc" },
            { data: "amount" }
            
        ],
                 columnDefs: [
      {
        targets: [1],
        visible: false,
        searchable: true
    },
]
            });
            
         
             
            table =  $('#tabexample').DataTable({data : vallist,columns: [
            { data: "firstcol" },
            //{ data: "img" },
            { data: "stakec" },
            { data: "percent" },
            { data: "name" },
            { data: "commission" },
           // { data: "vstring" },
            { data: "apy" },
            { data: "srate"}
            //{ data: "namecol" },
            //{ data: "all"}
           ],
           
           
                  order: [[ 5, "desc" ]],
                 columnDefs: [
      {
        targets: [1,2,3,4,5,6],
        visible: false,
        searchable: true
    },
]
                 
                 
            });
            
            table.on( 'search.dt', function () {
     $('#t5chk').prop('checked', false);
      $('#t10chk').prop('checked', false);
       $('#t20chk').prop('checked', false);
} );
            
             var firstHeaderRow = $('tr', table.table().header() );
             $(firstHeaderRow).html("<td><div style=\"font-size: 0.9vw;display: flex;\"><div style=\"width:43%;text-align:left;\" id='namesort' onclick='namesort();'> <strong>Validator Name</strong> </div><div id='stakesort' style=\"width:20%;text-align:left;margin-left:-4%;\" onclick='stakesort();'><strong>Stake</strong></div><div id='commsort' onclick='commsort();' style=\"text-align:left;width:18%;margin-left: -3%;\"><strong>Commission</strong></div><div onclick='apysort();' id='apysort' style=\"text-align:left;margin-left:-7%;width:8%\"><strong>APY<i class=\"fas fa-arrow-down\"></i></strong></div><div id='skipsort' style=\"text-align:left;margin-left:-3%;width:14%\" onclick='skipsort();'><strong>Skip Rate</strong></div></div></td>");
      
         }
         else
         {
             
         }
        }});
        
        
       $('#loadingscreen').hide(); 
       
      
 
}
    
}
    
}

function top5()
{
    
   if(table.data().count()>=5)
   {
        if($('#t5chk').is(":checked"))
          {
               $('#t5chk').prop('checked', false);
               $("#top5").css("background-color","white");
               $("#top5").css("color","black");
       for(var i=0;i<5;i++)
       {
          var h = table.row(':eq('+i+')', { page: 'current' }).data();
          var index = interimlist.findIndex(x => x.firstcol ==h['firstcol']);
          var chkstr=$('#dbtn'+index).text();
         
              
              
          if(chkstr=="Selected")
          {
              addlist(index);
          }
          else
          {
              
          }
          
       }
       
   }
   else
          {
              $('#t5chk').prop('checked', true);
              $("#top5").css("background-color","black");
               $("#top5").css("color","white");
               for(var i=0;i<5;i++)
       {
          var h = table.row(':eq('+i+')', { page: 'current' }).data();
          var index = interimlist.findIndex(x => x.firstcol ==h['firstcol']);
          var chkstr=$('#dbtn'+index).text();
              if(chkstr=="Selected")
          {
              
          }
          else
          {
              addlist(index);
          } 
          }
          }
   }
   else
   {
       alert("Sorry , table does not have sufficient items.");
   }
}


function top10()
{
  if(table.data().count()>=10)
   {
        if($('#t10chk').is(":checked"))
          {
               $('#t10chk').prop('checked', false);
                 $("#top10").css("background-color","white");
               $("#top10").css("color","black");
       for(var i=0;i<10;i++)
       {
          var h = table.row(':eq('+i+')', { page: 'current' }).data();
          var index = interimlist.findIndex(x => x.firstcol ==h['firstcol']);
          var chkstr=$('#dbtn'+index).text();
         
              
              
          if(chkstr=="Selected")
          {
              addlist(index);
          }
          else
          {
              
          }
          
       }
       
   }
   else
          {
              $('#t10chk').prop('checked', true);
                $("#top10").css("background-color","black");
               $("#top10").css("color","white");
               
               for(var i=0;i<10;i++)
       {
          var h = table.row(':eq('+i+')', { page: 'current' }).data();
          var index = interimlist.findIndex(x => x.firstcol ==h['firstcol']);
          var chkstr=$('#dbtn'+index).text();
              if(chkstr=="Selected")
          {
              
          }
          else
          {
              addlist(index);
          } 
          }
          }
   }
   else
   {
       alert("Sorry , table does not have sufficient items.");
   }
}


function top20()
{
     if(table.data().count()>=20)
   {
       if(table.page.info().length<20)
       {
            table.page.len(20).draw();
       }
        //
        if($('#t20chk').is(":checked"))
          {
              //table.page.len(20).draw();
             // alert("hi");
               $('#t20chk').prop('checked', false);
               
                 $("#top20").css("background-color","white");
               $("#top20").css("color","black");
       for(var i=0;i<20;i++)
       {
          var h = table.row(':eq('+i+')', { page: 'current' }).data();
          var index = interimlist.findIndex(x => x.firstcol ==h['firstcol']);
          var chkstr=$('#dbtn'+index).text();
         
              
              
          if(chkstr=="Selected")
          {
              addlist(index);
          }
          else
          {
              
          }
          
       }
       
   }
   else
          {
              $('#t20chk').prop('checked', true);
              
                $("#top20").css("background-color","black");
               $("#top20").css("color","white");
               for(var i=0;i<20;i++)
       {
          var h = table.row(':eq('+i+')', { page: 'current' }).data();
          var index = interimlist.findIndex(x => x.firstcol ==h['firstcol']);
          var chkstr=$('#dbtn'+index).text();
              if(chkstr=="Selected")
          {
              
          }
          else
          {
              addlist(index);
          } 
          }
          
          }
         
   }
   else
   {
       alert("Sorry , table does not have sufficient items.");
   }
}


function cleartop()
{
    if(table.data().count()>=20)
   {
       for(var i=0;i<20;i++)
       {
          var h = table.row(':eq('+i+')', { page: 'current' }).data();
          var index = interimlist.findIndex(x => x.firstcol ==h['firstcol']);
          var chkstr=$('#dbtn'+index).text();
          if(chkstr=="Selected")
             addlist(index); 
        }
         
    }
}


var nsort=false;
function namesort()
{
    if(nsort==false)
    {
        table.order([]);
    table.order( [ 3, 'asc' ] ).draw();
     $('#namesort').html("<strong>Validator Name  <i class=\"fas fa-arrow-up\"></i> </strong>");
      $('#stakesort').html("<strong>Stake</strong>");
      $('#apysort').html("<strong>APY</strong>");
       $('#commsort').html("<strong>Commission</strong>");
        $('#skipsort').html("<strong>Skip Rate</strong>");
     nsort=true;
    }
    else
    {
        table.order([]);
        table.order( [ 3, 'desc' ] ).draw();
     $('#namesort').html("<strong>Validator Name <i class=\"fas fa-arrow-down\"></i></strong>");
       $('#stakesort').html("<strong>Stake</strong>");
       $('#apysort').html("<strong>APY</strong>");
        $('#commsort').html("<strong>Commission</strong>");
         $('#skipsort').html("<strong>Skip Rate</strong>");
     nsort=false;
    }
}

var ssort=false;
function stakesort()
{
    if(ssort==false)
    {
        table.order([]);
    table.order( [ 1, 'asc' ] ).draw();
     $('#stakesort').html("<strong>Stake<i class=\"fas fa-arrow-up\"></i> </strong>");
      $('#commsort').html("<strong>Commission</strong>");
     $('#namesort').html("<strong>Validator Name</strong>");
      $('#skipsort').html("<strong>Skip Rate</strong>");
     $('#apysort').html("<strong>APY</strong>");
     ssort=true;
    }
    else
    {
        table.order([]);
        table.order( [ 1, 'desc' ] ).draw();
     $('#stakesort').html("<strong>Stake<i class=\"fas fa-arrow-down\"></i></strong>");
      $('#commsort').html("<strong>Commission</strong>");
     $('#namesort').html("<strong>Validator Name</strong>");
     $('#apysort').html("<strong>APY</strong>");
      $('#skipsort').html("<strong>Skip Rate</strong>");
     ssort=false;
    }
}


var csort=false;
function commsort()
{
    if(csort==false)
    {
        table.order([]);
    table.order( [ 4, 'asc' ] ).draw();
     $('#commsort').html("<strong>Commission<i class=\"fas fa-arrow-up\"></i> </strong>");
       $('#stakesort').html("<strong>Stake</strong>");
     $('#namesort').html("<strong>Validator Name</strong>");
      $('#skipsort').html("<strong>Skip Rate</strong>");
     $('#apysort').html("<strong>APY</strong>");
     csort=true;
    }
    else
    {
        table.order([]);
        table.order( [ 4, 'desc' ] ).draw();
     $('#stakesort').html("<strong>Stake</strong>");
     $('#commsort').html("<strong>Commission<i class=\"fas fa-arrow-down\"></i> </strong>");
     $('#namesort').html("<strong>Validator Name</strong>");
      $('#skipsort').html("<strong>Skip Rate</strong>");
      $('#apysort').html("<strong>APY</strong>");
     csort=false;
    }
}

var asort=false;
function apysort()
{
    if(asort==false)
    {
        table.order([]);
    table.order( [ 5, 'asc' ] ).draw();
     $('#commsort').html("<strong>Commission</strong>");
     $('#apysort').html("<strong>APY<i class=\"fas fa-arrow-up\"></i></strong>");
       $('#stakesort').html("<strong>Stake</strong>");
        $('#skipsort').html("<strong>Skip Rate</strong>");
     $('#namesort').html("<strong>Validator Name</strong>");
     asort=true;
    }
    else
    {
        table.order([]);
        table.order( [ 5, 'desc' ] ).draw();
     $('#stakesort').html("<strong>Stake</strong>");
     $('#commsort').html("<strong>Commission</strong>");
      $('#apysort').html("<strong>APY<i class=\"fas fa-arrow-down\"></i></strong>");
       $('#skipsort').html("<strong>Skip Rate</strong>");
     $('#namesort').html("<strong>Validator Name</strong>");
     asort=false;
    }
}

var sksort=false;
function skipsort()
{
    if(sksort==false)
    {
        table.order([]);
    table.order( [ 6, 'asc' ] ).draw();
     $('#commsort').html("<strong>Commission</strong>");
     $('#apysort').html("<strong>APY</strong>");
       $('#stakesort').html("<strong>Stake</strong>");
     $('#namesort').html("<strong>Validator Name</strong>");
     $('#skipsort').html("<strong>Skip Rate<i class=\"fas fa-arrow-up\"></i></strong>");
     sksort=true;
    }
    else
    {
        table.order([]);
        table.order( [ 6, 'desc' ] ).draw();
     $('#stakesort').html("<strong>Stake</strong>");
     $('#commsort').html("<strong>Commission</strong>");
      $('#apysort').html("<strong>APY</strong>");
       $('#skipsort').html("<strong>Skip Rate<i class=\"fas fa-arrow-down\"></i></strong>");
     $('#namesort').html("<strong>Validator Name</strong>");
     sksort=false;
    }
}

function empty()
{
    
}

function vpopclose()
{
     $('#validatorinfoscreen').hide();
}

function modal(va,bid)
{
    var ibid = bid;
   $('#validatorinfoscreen').show();
   for(var i=0;i<vallist.length;i++)
   {
       if(vallist[i].voteacc==va)
       {
           //alert("found");
           console.log("vallist = ");
           console.log(vallist[i]);
           $(".vimg").attr("src","https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png");
           $(".vimg").attr("src",vallist[i].img);
           $("#heading").html(vallist[i].name);
            $("#pubkey").html("<a class=\"imgcol1\" href=\"https://www.validators.app/validators/Ninja1spj6n9t5hVYgF3PdnYz2PLnkt7rvaw3firmjs/?locale=en&amp;network=mainnet\">"+vallist[i].identity+"</a>");
            $("#voteid").html(vallist[i].voteacc);
            var voteacc= vallist[i].voteacc;
            var tmp = vallist[i].poollist;
            var tmpstring="";
            for (var j=0;j<vallist[i].poollist.length;j++)
            {
                tmpstring=tmpstring+"<div>"+tmp[j]+"</div><div style=\"width:1px;background:black;\"></div>";
            }
            tmpstring=tmpstring;
             
             $("#stakepoollist").html(tmpstring);
             //$("#stakepoollist").html("<strong>Pools staking:</strong> "+vallist[i].poollist.toString());
             $("#vasn").html(vallist[i].asn);
               $("#vdconc").html(vallist[i].cstring);
          $("#vldc").html(vallist[i].dcenter);
          $("#vdelin").html(vallist[i].delinquent.toUpperCase());
           $("#vskip").html(Math.round(vallist[i].srate*10000)/100+" %");
           // $("#vskip").html("<strong>Skip Rate:</strong>"+vallist[i].srate+" %");
            $("#veprf").html(vallist[i].vstring);
            $("#vcomm").html(vallist[i].commission+" %");
            $("#chist").html(vallist[i].chistory);
            $("#vapy").html(vallist[i].apy+" %");
            $("#vstake").html(vallist[i].stakec+" SOL");
            $("#vver").html(vallist[i].version);
           //$("#addtolist").click(function(){ addtolist(fcol , voteacc); });
           $('#addtolist').attr('onclick', 'addtolist("'+ibid+'")');
       }
   }
}
 newstkary=[];
function addtolist(bid)
{
  addlist(bid);
   $('#validatorinfoscreen').hide();
   
    
  
}

function addlist(bid)
{
    //alert("trigered");
    var arry = interimlist[bid];
    
  if($("#dbtn"+bid).text()=="Delegate")
   {
       
       //console.log(arry);
       
        var temp=[];
   var len = newstkary.length;
    $("#dbtn"+bid).html("<input id=\"chk"+bid+"\"  onclick='addlist(\""+bid+"\");' type=\"checkbox\"/><label id=\"lid"+bid+"\" for=\"chk"+bid+"\"></label>Selected") ;
    $("#dbtn"+bid).css("background-color","mediumpurple");
     $("#dbtn"+bid).css("color","white");
     $("#dbtn"+bid).css("border","0px");
        $("#chk"+bid).prop('checked', true);
   if(newstkary.some(item=>item.voteacc==arry.voteacc))
   {
        
   }
   else
   {
    temp['fcol']="<div class=\"fcol\"><img class=\"imgcls\" src=\""+arry.img+"\">"+"<strong>"+"<a class=\"imgcol\" href=\"https://www.validators.app/validators/"+arry.identity+"/?locale=en&network=mainnet\">"+arry.name+"</a>"+"</div>";
    temp['voteacc']=arry.voteacc;
    temp['amount']="<div id=\"pr"+bid+"\" style=\"display:flex;\"><input type=\"text\" id=\"txt"+len+"\">SOL   <button onclick=\"deletestake("+bid+")\" id=\"delete"+bid+"\" class=\"delstk\"><i class=\"fas fa-trash-alt\"></i></button></div>";
    newstkary.push(temp);
    newtable.clear();
    newtable.rows.add(newstkary);
    newtable.draw();
    stkcount++;
    $("#lblCartCount").html(stkcount);
   // alert("Validator added to stake list. Please visit stake section to assign stake amount");
   // $("#validatorinfoscreen").hide();
    //$("#stakamt").val("");
   }
   }
   else
   {
     $("#dbtn"+bid).html("<input id=\"chk"+bid+"\"  onclick='addlist(\""+bid+"\");' type=\"checkbox\"/><label id=\"lid"+bid+"\" for=\"chk"+bid+"\"></label>Delegate") ;
       $("#dbtn"+bid).css("background-color","white");
     $("#dbtn"+bid).css("color","black");
     $("#dbtn"+bid).css("border","1px solid black");
        $("#chk"+bid).prop('checked', false);
        for (var i=0;i<newstkary.length;i++)
        {
            if(newstkary[i].voteacc==arry.voteacc)
            {
                 newstkary.splice(i, 1);
                 newtable.clear();
    newtable.rows.add(newstkary);
    newtable.draw();
    stkcount--;
    $("#lblCartCount").html(stkcount);
            }
        }
   }
   
}

function deletestake(bid)
{
 // alert("triggered");   
    addlist(bid);
    var row = newtable.row( $("#pr"+bid).parents('tr') );
    row.remove();
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function rvltxn()
{
$('#txnscreen').show();
}

function txnclose()
{
    $('#txnscreen').hide();
}

function add()
{
    //alert( JSON.stringify(table.rows('.selected').data()) +' row(s) selected' );
    var templist =  table.rows('.selected').data();
     for(var i = 0; i < templist.length; i++)
     {
         stakeary.push(templist[i]['identity']);
     }
    // alert(JSON.stringify(stakeary));
     
}

function stkclose()
{
     $('#stakescreen').hide();
}

function reset()
{
    newstkary=[];
    newtable.clear();
    newtable.draw();
    stkcount=0;
    $('#lblCartCount').html("0");
     $('#t5chk').prop('checked', false);
      $('#t10chk').prop('checked', false);
       $('#t20chk').prop('checked', false);
           table.clear();
           table.rows.add(vallist);
            table.draw();
           // stkcount=0;
}

function vscreen()
{
    $('#validatorscreen').show();
    $('#filterbtn').show();
    //$('#validatorscreen').show();
}

var filvar=0;
function rvlfilter(arg)
{
    
    if(arg=="comm")
    {
         if(!$('#comfil').is(":visible"))
         {
           $('#comfil').show();
            $('#apyfil').hide();
             $('#stafil').hide();
             $('#datfil').hide();
             $('#votfil').hide();
             $('#versionfil').hide();
         $('#filterval').show();
         $('#resetbtn').removeAttr('onclick');
         $('#resetbtn').attr('onClick', 'reset_filter("comm");');
         }
         else
         {
             $('#filterval').hide();
              $('#comfil').hide();
         }
        
    }
    else if(arg=="apy")
    {
        if(!$('#apyfil').is(":visible"))
         {
         $('#apyfil').show();
          $('#comfil').hide();
             $('#stafil').hide();
             $('#datfil').hide();
             $('#votfil').hide();
             $('#versionfil').hide();
              $('#filterval').show();
          $('#resetbtn').removeAttr('onclick');
         $('#resetbtn').attr('onClick', 'reset_filter("apy");');
         }
         else
         {
             $('#filterval').hide();
              $('#apyfil').hide();
         }
    }
    else if(arg=="data")
    {
          if(!$('#datfil').is(":visible"))
         {
        $('#datfil').show();
        $('#apyfil').hide();
          $('#comfil').hide();
             $('#stafil').hide();
             $('#votfil').hide();
             $('#versionfil').hide();
              $('#filterval').show();
         $('#resetbtn').removeAttr('onclick');
         $('#resetbtn').attr('onClick', 'reset_filter("data");');
    }
    else
    {
        $('#filterval').hide();
              $('#datfil').hide();
    }
    }
     else if(arg=="stake")
    {
         if(!$('#stafil').is(":visible"))
         {
        $('#datfil').hide();
        $('#apyfil').hide();
          $('#comfil').hide();
          $('#versionfil').hide();
           $('#stafil').show();
             $('#votfil').hide();
              $('#filterval').show();
          $('#resetbtn').removeAttr('onclick');
         $('#resetbtn').attr('onClick', 'reset_filter("stake");');
         }
         else
         {
             $('#filterval').hide();
              $('#stafil').hide();
         }
    }
     else if(arg=="vote")
    {
        if(!$('#votfil').is(":visible"))
         {
        $('#datfil').hide();
        $('#apyfil').hide();
          $('#comfil').hide();
          $('#versionfil').hide();
           $('#stafil').hide();
              $('#filterval').show();
         $('#votfil').show();
          $('#resetbtn').removeAttr('onclick');
         $('#resetbtn').attr('onClick', 'reset_filter("vote");');
         }
         else
         {
             $('#filterval').hide();
              $('#votfil').hide();
         }
    }
    else if(arg=="version")
    {
        if(!$('#versionfil').is(":visible"))
         {
        $('#datfil').hide();
        $('#apyfil').hide();
          $('#comfil').hide();
          $('#versionfil').show();
           $('#stafil').hide();
              $('#filterval').show();
         $('#votfil').hide();
          $('#resetbtn').removeAttr('onclick');
         $('#resetbtn').attr('onClick', 'reset_filter("version");');
         }
         else
         {
             $('#filterval').hide();
              $('#versionfil').hide();
         }
    }
    
    else
    {
        
    }
    
}

var show=true;
function showCheckboxes()
{
    
      var checkboxes = 
                document.getElementById("checkBoxes");
  
            if (show) {
                checkboxes.style.display = "block";
                show = false;
            } else {
                checkboxes.style.display = "none";
                show = true;
            }
}

function labelfunc(thiss)
{
   // console.log($(thiss).parent().text());
   dnameary.push($(thiss).parent().text());
   
}


function valclose()
{
     $('#validatorscreen').hide();
      $('#filterbtn').hide();
      $('#filterval').hide();
       vallist=interimlist;
        $('#t5chk').prop('checked', false);
      $('#t10chk').prop('checked', false);
       $('#t20chk').prop('checked', false);
       table.clear();
         table.rows.add(vallist);
          table.draw();
}

async function stake()
{
    var sendary=[];
     $('#loadingscreen').show(); 
     console.log(newstkary);
           vallist=interimlist;
            $('#t5chk').prop('checked', false);
      $('#t10chk').prop('checked', false);
       $('#t20chk').prop('checked', false);
           table.clear();
           table.rows.add(vallist);
            table.draw();
    alert("Please wait until wallet app pops up and staking is finished");
   // const timer = ms => new Promise(res => setTimeout(res, ms))
    var arylength=newstkary.length;
    let lamportsForStakeAccount = await web3.LAMPORTS_PER_SOL;
    for(var i=0;i<arylength;i++)
    {
       
       // alert("hi");
     var vcc =  newstkary[i].voteacc;
     var stake = $("#txt"+i).val();
     if(stake==""||stake==null)
     stake=0;
     console.log(vcc);
     console.log(stake);
     
     try{
    // console.log(vcc);
     $('#loaddesc').html("Creating stake account<br>Click approve on wallet.");
        stakeAccount = web3.Keypair.generate();
        
        console.log(i+"="+stakeAccount.publicKey);
    let createAccountTransaction = web3.StakeProgram.createAccount({
         fromPubkey: pkey,
    authorized: new web3.Authorized(pkey, pkey),
    lamports: lamportsForStakeAccount*stake,
    lockup: new web3.Lockup(0, 0, pkey),
    stakePubkey: stakeAccount.publicKey
    });
    createAccountTransaction.feePayer = pkey;
    let blockhashObj = await connection.getRecentBlockhash();
    createAccountTransaction.recentBlockhash = await blockhashObj.blockhash;
    
    
     if(createAccountTransaction) {
    // alert("Txn created successfully");
    }
    
    createAccountTransaction.sign(stakeAccount);
if(wallname=="ph")
var signedTransaction = await window.solana.signTransaction(createAccountTransaction);
if(wallname=="sl")
var signedTransaction = await window.solflare.signTransaction(createAccountTransaction);
$('#loaddesc').html("Sending stake account transaction.");
//alert(signedTransaction.verifySignatures());
//var signature = await connection.sendRawTransaction(signedTransaction.serialize());
var signature = await web3.sendAndConfirmRawTransaction(connection, signedTransaction.serialize());

console.log(signature);
$('#loaddesc').html("Starting delegation transaction<br> Click approve on wallet.");
let votePubkey =new web3.PublicKey(vcc); 
let delegateTransaction = web3.StakeProgram.delegate({
    stakePubkey: stakeAccount.publicKey,
    authorizedPubkey: pkey,
    votePubkey: votePubkey,
});
delegateTransaction.feePayer = pkey;
    blockhashObj = await connection.getRecentBlockhash();
    delegateTransaction.recentBlockhash = await blockhashObj.blockhash;
//await web3.sendAndConfirmTransaction(connection, delegateTransaction, [fromPublicKey, authorizedAccount]);
if(wallname=="ph")
signedTransaction = await window.solana.signTransaction(delegateTransaction);
if(wallname=="sl")
signedTransaction = await window.solflare.signTransaction(delegateTransaction);
//alert(signedTransaction.verifySignatures());
$('#loaddesc').html("Sending delegation transaction.");
signature = await web3.sendAndConfirmRawTransaction(connection,signedTransaction.serialize());
   console.log(signature);  
   $('#alrtmsg').html("Successfully staked.");
     }
catch (err)
{
    console.log("error = "+err);
    $('#stakescreen').hide();
    $('#alrtmsg').html("Error Message - "+err.message);
    $('#snackbarwrap').show();
    //setTimeout(function(){ $('#snackbar').removeClass("show"); }, 5000);
    $('#lblCartCount').html("0");
    stkcount=0;
    break;
}
    // alert("voteacc="+vcc+" value= "+$( "#id"+i ).val());
      
        
    }
    $('#loadingscreen').hide(); 
    newtable.clear();
    newtable.draw();
    newstkary=[];
    $('#lblCartCount').html("0");
    stkcount=0;
     
    $('#snackbarwrap').show();
    //alert("Process finished");
}



function reveal()
{
  
   //alert("working");
    if(colps==0)
    {
   $('#arw').addClass("caret-down");
    $('#filterval').addClass("rvl"); 
   //$('#arw').removeClass( "fa-caret-right" );
   colps=1;
    }
    else
    {
        $('#arw').removeClass("caret-down"); 
         $('#filterval').removeClass("rvl"); 
  // $('#arw').addClass( "fa-caret-right" );
   colps=0; 
    }
    
    
}

function rewardlist()
{
  
   //alert("working");
    if(colps==0)
    {
   $('#arw').addClass("caret-down");
    $('#filterval').addClass("rvl"); 
   //$('#arw').removeClass( "fa-caret-right" );
   colps=1;
    }
    else
    {
        $('#arw').removeClass("caret-down"); 
         $('#filterval').removeClass("rvl"); 
  // $('#arw').addClass( "fa-caret-right" );
   colps=0; 
    }
    
    
}

function reset_filter(arg)
{
     $('#t5chk').prop('checked', false);
      $('#t10chk').prop('checked', false);
       $('#t20chk').prop('checked', false);
    if(arg=="data")
    {
     $('#checkBoxes').empty();
     for(var i=0;i<liststrary.length;i++)
     {
    $('#checkBoxes').append($(liststrary[i])); 
     }
      $("#dconclist").val("Select");
     $("#dasnlist").val("Select");
     dnameary=[];
    }
     if(arg=="vote")
    {
    $("#vperf").val("Select");
     $("#deli").val("Select");
      $("#skipmin").val("");
     $("#skipmax").val("");
    }
     if(arg=="stake")
    {
     
     $("#stakelist").val("Select");
      $("#stakemin").val("");
     $("#stakemax").val("");
    }
     if(arg=="apy")
    {
       $("#apymin").val("");
     $("#apymax").val("");
    }
      if(arg=="comm")
    {
     $("#chlist").val("Select");
       $("#commin").val("");
     $("#commax").val("");
    }
    
    if(arg=="version")
    {
        $("#verlist").val("Select");
    }
     apply_filter();
}

function apply_filter()
{
    vallist=interimlist;
   //console.log(vallist);
     $('#t5chk').prop('checked', false);
      $('#t10chk').prop('checked', false);
       $('#t20chk').prop('checked', false);
        var templist=[];
        //alert("hi1");
        if(dnameary.length>0)
        {
        for(var i=0;i<dnameary.length;i++)
        {
        var dnameval=dnameary[i];
      if(templist.length==0)
      {
            templist=(vallist.filter(x=>x.datacenter==dnameval));
       console.log("=");     
      }
            else
            {
                var tt=[];
            tt=(vallist.filter(x=>x.datacenter==dnameval));
             Array.prototype.push.apply(templist,tt); 
             console.log(tt);
            }
            //console.log(vallist);
       console.log(templist);
        }
        vallist=templist;
        }
    
   
         var dasnval=$( "#dasnlist option:selected" ).text();
         if(dasnval!="Select")
          vallist= vallist.filter(x=>x.asn==dasnval);
         // alert("hi2");
       // console.log(vallist);
    
    
    
        //alert("hi");
         var verval=$( "#verlist option:selected" ).text();
         //console.log(vallist[0]);
         //alert("new val = "+verval);
         if(verval!="Select")
          vallist= vallist.filter(x=>x.version==verval);
          //console.log(vallist);
    
    
   
        //alert("pstake")
         var stkval=$( "#stakelist option:selected" ).text();
         if(stkval!="Select")
          vallist= vallist.filter(x=>x.pstake==stkval);
          
    
    
    
        var coval=$( "#dconclist option:selected" ).text();
         if(coval!="Select")
          vallist= vallist.filter(x=>x.concentration==coval);
    
    
    
    
         var cval=$( "#chlist option:selected" ).text();
         if(cval!="Select")
          vallist= vallist.filter(x=>x.chistory==cval);
    
    
    
  

   
        var votval=$( "#vperf option:selected" ).text();
         if(votval!="Select")
          vallist= vallist.filter(x=>x.vperf==votval);
    
    
      
        var dval=$( "#deli option:selected" ).text();
         if(dval!="Select")
          vallist= vallist.filter(x=>x.delinquent==dval);
    
    
   
          var v1=$( "#stakemin" ).val();
         var v2=$( "#stakemax" ).val();
         
         //alert(v2);
         if(v1==null||v1=="")
         v1=0;
         if(v2==null||v2=="")
         v2=9999999999;
          vallist= vallist.filter(x=>x.stake>v1&&x.stake<v2);
          // vallist= vallist.filter();
        
    
    
    

         var v1=$( "#commin" ).val();
         // alert(v1);
         var v2=$( "#commax" ).val();
         //alert(v2);
         if(v1==null||v1=="")
         v1=0;
         if(v2==null||v2=="")
         v2=9999999999;
          vallist= vallist.filter(x=>x.commission>=v1);
           vallist= vallist.filter(x=>x.commission<=v2);
    
    
     
         var v1=$( "#apymin" ).val();
         // alert(v1);
         var v2=$( "#apymax" ).val();
         //alert(v2);
         if(v1==null||v1=="")
         v1=0;
         if(v2==null||v2=="")
         v2=9999999999;
          vallist= vallist.filter(x=>x.apy>=v1);
           vallist= vallist.filter(x=>x.apy<=v2);
    
    
    
    
         var v1=$( "#skipmin" ).val();
         
         var v2=$( "#skipmax" ).val();
     
         if(v1==null||v1=="")
         v1=0;
         if(v2==null||v2=="")
         v2=9999999999;
          vallist= vallist.filter(x=>x.srate>=(v1/100));
           vallist= vallist.filter(x=>x.srate<=(v2/100));
    
    
      table.clear();
         table.rows.add(vallist);
          table.draw();
          
          $('#filterval').hide();
}


async function wallconn(str)
{
    if(str=="ph")
    {
        wallname="ph";
    
     if ("solana" in window) {
   
    }
    else
    {
         window.open("https://phantom.app/", "_blank");
    }
  
   if(!window.solana.isConnected)
   {
       await window.solana.connect();
await window.solana.on("connect", () => console.log("connected!"));
pkey = await window.solana.publicKey;
balance = await connection.getBalance(pkey);
         balance=Math.round(balance/1000000);
          $('#balid').html(balance/1000+" Sol");
           $('#wallet').html(pkey.toString());
           $('#navbarright').html(" <i style=\"color:blueviolet;\" class=\"fas fa-ghost fa-fw\"></i>  Connected <span id=\"rvlspn\"><button class=\"wltbtn\" onclick=\"disconnect('ph');\" ><i class=\"fas fa-unlink fa-fw\"></i> Disconnect?</button></span>");
   }
    }
    if(str=="sl")
    {
       wallname="sl";
     if ("solflare" in window) {
     }
    else
    {
         window.open('https://solflare.com', '_blank');
    }
  
   if(!window.solflare.isConnected)
   {
       await window.solflare.connect();
await window.solflare.on("connect", () => console.log("connected!"));
pkey = await window.solflare.publicKey;
balance = await connection.getBalance(pkey);
         balance=Math.round(balance/1000000);
          $('#balid').html(balance/1000+" Sol");
           $('#wallet').html(pkey.toString());
           $('#navbarright').html(" <i style=\"color:orange;\" class=\"fas fa-sun fa-fw\"></i>  Connected <span id=\"rvlspn\"><button class=\"wltbtn\" onclick=\"disconnect('sl');\" ><i class=\"fas fa-unlink fa-fw\"></i> Disconnect?</button></span>");
   } 
    }
}

async function disconnect(str)
{
    if(str=="ph")
    {
        pkey="";
        $('#balid').html("0 Sol");
         $('#wallet').html("Wallet not connected.");
          $('#navbarright').html(" <i class=\"fas fa-link\"></i>  Connect <span id=\"rvlspn\"><button class=\"wltbtn\" onclick=\"wallconn('ph');\" ><i class=\"fas fa-ghost fa-fw\"></i> Phantom</button><button class=\"wltbtn\" onclick=\"wallconn('sl');\"><i class=\"fas fa-sun fa-fw\"></i> Solflare</button></span>");
          wallname="";
          await window.solana.disconnect();
    }
    if(str=="sl")
    {
        pkey="";
        $('#balid').html("0 Sol");
         $('#wallet').html("Wallet not connected.");
          $('#navbarright').html(" <i class=\"fas fa-link\"></i>  Connect <span id=\"rvlspn\"><button class=\"wltbtn\" onclick=\"wallconn('ph');\" ><i class=\"fas fa-ghost fa-fw\"></i> Phantom</button><button class=\"wltbtn\" onclick=\"wallconn('sl');\"><i class=\"fas fa-sun fa-fw\"></i> Solflare</button></span>");
          await window.solflare.disconnect();
          wallname="";
    }
    
}

async function rvlstk()
{
    if(wallname=="sl"||wallname=="ph")
    {
     await wallconn();
    $('#stakescreen').show();
    }
    else
    {
         $('#alrtmsg').html("Connect the wallet to stake!");
      $('#snackbarwrap').show();
    }
   
}


async function rvlrwd()
{
   if(wallname=="sl"||wallname=="ph") 

{
   await wallconn();
     $('#loadingscreen').show(); 
       $('#loaddesc').html("Fetching reward details");
    rewardsary=[];
    $('#rwdhd').empty()
     var accounts = await connection.getParsedProgramAccounts(web3.StakeProgram.programId, {filters: [{dataSize: 200}, {memcmp: {offset: 12,bytes: pkey  }}]});
    // jb
     $('#rewardscreen').show();
     for(var i=0;i<accounts.length;i++)
     {
         console.log(accounts)
        // alert(accounts[i].account.data.parsed.type);
         
         
             var temp = [];
            
               var apyary=[];
               if(accounts[i].account.data.parsed.type=="delegated")
               {
              temp['validator']=accounts[i].account.data.parsed.info.stake.delegation.voter;
              temp['actepc']=accounts[i].account.data.parsed.info.stake.delegation.activationEpoch;
              temp['dctepc']=accounts[i].account.data.parsed.info.stake.delegation.deactivationEpoch; 
               }
              else
              {
              temp['validator']="NULL";
              temp['actepc']="NULL";
              temp['dctepc']="NULL";
              }
              temp['stake']=accounts[i].account.lamports;
               let stakeBalance = await connection.getBalance(accounts[i].pubkey);
                temp['stakeb']=stakeBalance;
              temp['pub']=accounts[i].pubkey.toString();
              rewardsary.push(temp);
              var curepoch = await connection.getEpochInfo();
              curepoch=curepoch.epoch;
              if(curepoch>temp['dctepc'])
              {
                  curepoch=temp['dctepc'];
              }
       
              var stat=await connection.getStakeActivation(new web3.PublicKey( temp['pub']));
              
              if(stat.state=="activating"||stat.state=="active")
              {
                  var htmlstr="<div class=\"stakecell\"> <div class=\"stakein\">                    <div class=\"identity\">                   <div class=\"stakeaccountid\">Stake account : <a href=\"https://explorer.solana.com/address/"+temp['pub']+"\">"+temp['pub']+"</a>  </div> <div class=\"voteaccountid\"> Vote account : <a href=\"https://explorer.solana.com/address/"+temp['validator']+"\">"+temp['validator']+"</a></div> </div>    <div class=\"stakedetails\">                        <div class=\"stkrewbal\">Balance : "+Math.round((temp['stake']/lampsper)*100)/100+"</div><div class=\"stkrewstate\">State : "+stat.state+" </div> </div> <div class=\"epochdetails\">                        <div class=\"actepc\">Activation Epoch : "+ temp['actepc']+"</div> <div class=\"deactepc\">Deactivation Epoch : Nil </div>        </div>    </div> <button id=\"deactbtn\" class=\"deactbtn\" onclick=\"deactivate('"+temp['pub']+"')\">De-activate</button><div><div onclick=\"expnd('lst"+i+"',"+temp['actepc']+","+curepoch+","+temp['stake']+",'"+temp['pub']+"')\" class=\"rwdexpnd\"><i class=\"fas fa-caret-right fa-fw\" id=\"apyrvl\"></i>Rewards</div><div id=\"lst"+i+"\" class=\"rwdlist\"></div></div></div>";
                   $('#rwdhd').append(htmlstr);
                    $('#lst'+i).hide();
              }
              
              else if(stat.state=="inactive"&&accounts[i].account.data.parsed.type=="delegated")
              {
                    var htmlstr="<div class=\"stakecell\"> <div class=\"stakein\">                    <div class=\"identity\">                   <div class=\"stakeaccountid\">Stake account : <a href=\"https://explorer.solana.com/address/"+temp['pub']+"\">"+temp['pub']+"</a>  </div> <div class=\"voteaccountid\"> Vote account : <a href=\"https://explorer.solana.com/address/"+temp['validator']+"\">"+temp['validator']+"</a></div> </div>    <div class=\"stakedetails\">                        <div class=\"stkrewbal\">Balance : "+temp['stake']/lampsper+"</div><div class=\"stkrewstate\">State : Inactive </div> </div> <div class=\"epochdetails\">                        <div class=\"actepc\">Activation Epoch : "+ temp['actepc']+"</div> <div class=\"deactepc\">Deactivation Epoch : Nil </div>        </div>    </div> <button id=\"wdrbtn\" class=\"wdrbtn\" onclick=\"withdraw('"+temp['pub']+"','"+temp['stakeb']+"')\">Withdraw</button> <div><div onclick=\"expnd('lst"+i+"',"+temp['actepc']+","+curepoch+","+temp['stake']+",'"+temp['pub']+"')\" class=\"rwdexpnd\"><i class=\"fas fa-caret-right fa-fw\" id=\"apyrvl\"></i>Rewards</div><div id=\"lst"+i+"\" class=\"rwdlist\"></div></div></div>";
                    $('#rwdhd').append(htmlstr);
                     $('#lst'+i).hide();
              }
              else if(stat.state=="inactive"&&accounts[i].account.data.parsed.type=="initialized")
              {
                    var htmlstr="<div class=\"stakecell\"> <div class=\"stakein\"><div class=\"identity\"><div class=\"stakeaccountid\">Stake account : <a href=\"https://explorer.solana.com/address/"+temp['pub']+"\">"+temp['pub']+"</a>  </div> </div><div class=\"stakedetails\"><div class=\"stkrewbal\">Balance : "+temp['stake']/lampsper+"</div><div class=\"stkrewstate\">State : Inactive </div> </div> <div class=\"epochdetails\"></div></div> <button id=\"wdrbtn\" class=\"wdrbtn\" onclick=\"withdraw('"+temp['pub']+"','"+temp['stakeb']+"')\">Withdraw</button></div>";
                    $('#rwdhd').append(htmlstr);
                     $('#lst'+i).hide();
              }
              else
              {
                   var htmlstr="<div class=\"stakecell\"> <div class=\"stakein\">                    <div class=\"identity\">                   <div class=\"stakeaccountid\">Stake account : <a href=\"https://explorer.solana.com/address/"+temp['pub']+"\">"+temp['pub']+"</a>  </div> <div class=\"voteaccountid\"> Vote account : <a href=\"https://explorer.solana.com/address/"+temp['validator']+"\">"+temp['validator']+"</a></div> </div>    <div class=\"stakedetails\">                        <div class=\"stkrewbal\">Balance : "+temp['stake']/lampsper+"</div><div class=\"stkrewstate\">State : "+stat.state+" </div> </div> <div class=\"epochdetails\">                        <div class=\"actepc\">Activation Epoch : "+ temp['actepc']+"</div> <div class=\"deactepc\">Deactivation Epoch : "+temp['dctepc']+" </div>        </div>    </div><div class=\"rwdexpnd\"><i class=\"fas fa-caret-right fa-fw\" id=\"apyrvl\"></i>Rewards</div></div></div>";
                    $('#rwdhd').append(htmlstr); 
              }
              
         
     }
    // console.log("delegation dara=");
     //console.log(rewardsary);
    $('#loadingscreen').hide(); 
   }
   else
   {
        $('#alrtmsg').html("Connect the wallet to see rewards");
      $('#snackbarwrap').show(); 
   }
}
 
 
   async function withdraw(pub,balance)
{
      $('#loadingscreen').show();
        $('#loaddesc').html("Approve the transaction");
    try{
    var pubk=new web3.PublicKey(pub);
    //console.log("pubk=");
   // console.log(pubk);
    let withdrawTransaction = web3.StakeProgram.withdraw({
    stakePubkey: pubk,
    authorizedPubkey: pkey,
    toPubkey: pkey,
    lamports: balance,
});
withdrawTransaction.feePayer = pkey;
  let blockhashObj = await connection.getRecentBlockhash();
    withdrawTransaction.recentBlockhash = await blockhashObj.blockhash;
    if(wallname=="ph")
    var signedTransaction = await window.solana.signTransaction(withdrawTransaction);
    if(wallname=="sl")
    var signedTransaction = await window.solflare.signTransaction(withdrawTransaction);
 $('#loaddesc').html("Sending the transaction");
//alert(signedTransaction.verifySignatures());
//var signature = await connection.sendRawTransaction(signedTransaction.serialize());
var signature = await web3.sendAndConfirmRawTransaction(connection, signedTransaction.serialize());
//alert("Withdraw complete");
 $('#alrtmsg').html("Withdraw complete");
}
catch(err)
{
    //alert("Uh-oh , error. Code - "+err.code+" Message - "+err.message);
     $('#alrtmsg').html("Error Code - "+err.code+" Message - "+err.message);
      $('#snackbarwrap').show();
       $('#rewardscreen').hide();
    //setTimeout(function(){ $('#snackbar').removeClass("show"); }, 3000);
}
$('#loadingscreen').hide();
 $('#snackbarwrap').show();
$('#rewardscreen').hide();
}

function filclose()
{
     $('#filterval').hide();
}

async function expnd(lst,apec,depc,amt,acc)
{
   // alert(lst);
 
   $('#loaddesc').html("Fetching APY and commission");
     $("#"+lst).empty();
    if($("#"+lst).is(":hidden"))
    {
          $('#loadingscreen').show(); 
     $("#"+lst).show();
     $("#"+lst).append("<div class=\"rwdcls\"><div class='repc'>Epoch</div><div class='rrew'>Reward Amount</div><div class='rbal'>Balance in account</div><div class='rcomm'>Commission</div><div class='rapy'>APY</div></div><hr>"); 
     $("#"+lst).append("<div class=\"lstcls\" id=\"d"+lst+"\"></div>");
    for(var i=apec;i<depc;i++)
    {
       // console.log(await connection.getInflationReward([new web3.PublicKey(acc)],i,"finalized"));
     var resp = await connection.getInflationReward([new web3.PublicKey(acc)],i,"finalized");
    
     if(resp[0]==null)
     {
          $("#d"+lst).append("<div class=\"rwdcls\"><div class='repc'>"+i+"</div><div class='rrew'>Null</div><div class='rbal'>Null</div><div class='rcomm'>Null</div><div class='rapy'>Null</div></div><hr>"); 
     }
     else
     {
          $("#d"+lst).append("<div class=\"rwdcls\"><div class='repc'>"+i+"</div><div class='rrew'>"+resp[0].amount/web3.LAMPORTS_PER_SOL+" SOL</div><div class='rbal'>"+resp[0].postBalance/web3.LAMPORTS_PER_SOL+" SOL</div><div class='rcomm'>"+resp[0].commission+"%</div><div class='rapy'>"+Math.round((365/2)*resp[0].amount/(resp[0].postBalance-resp[0].amount)*10000)/100+" %</div></div><hr>"); 
        
     }
    }
     $('#loadingscreen').hide();   
    }
     else
      $(lst).hide();
      
      
}

async function deactivate(pub)
{
    
      $('#loadingscreen').show();
        $('#loaddesc').html("Approve the transaction");
        try{
     var pubk=new web3.PublicKey(pub);
    let deactivateTransaction = web3.StakeProgram.deactivate({
    stakePubkey: pubk,
    authorizedPubkey: pkey,
});
deactivateTransaction.feePayer = pkey;
  let blockhashObj = await connection.getRecentBlockhash();
    deactivateTransaction.recentBlockhash = await blockhashObj.blockhash;
    if(wallname=="ph")
    var signedTransaction = await window.solana.signTransaction(deactivateTransaction);
    if(wallname=="sl")
    var signedTransaction = await window.solflare.signTransaction(deactivateTransaction);
 $('#loaddesc').html("Sending the transaction");
//alert(signedTransaction.verifySignatures());
//var signature = await connection.sendRawTransaction(signedTransaction.serialize());
var signature = await web3.sendAndConfirmRawTransaction(connection, signedTransaction.serialize());
 $('#alrtmsg').html("Deactivation complete");
}
catch (err)
{
   // alert("Uh-oh , error. Code - "+err.code+" Message - "+err.message);
    $('#alrtmsg').html("Error Code - "+err.code+" Message - "+err.message);
      $('#snackbarwrap').show();
       $('#rewardscreen').hide();
    //setTimeout(function(){ $('#snackbar').removeClass("show"); }, 3000);
}

 $('#loadingscreen').hide();
$('#rewardscreen').hide();
$('#snackbarwrap').show();

}

function dismissalert()
{
     $('#snackbarwrap').hide();
}

function rwdclose()
{
    $('#rewardscreen').hide();
}