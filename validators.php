<?php 
include 'include/config.php';
/*
 if (mysqli_connect_errno()) {
 echo "Failed to connect to MySQL: " . mysqli_connect_error();
 die();
 }

 $stmt = $conn->prepare("TRUNCATE TABLE api;");
$sresult = $stmt->execute();
$stmt->close();
*/
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://www.validators.app/api/v1/validators/mainnet.json?order=score');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');


$headers = array();

$headers[] = 'Token: oeEq99KiDv29gNn91mfzb7rK';
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}
curl_close($ch);
$valary = array();$outary = array();
$valary=json_decode($result);
//print_r($valary);
//echo count($cars);
$tary = array();
echo "Length of web array ".count($valary)."<br>";
foreach($valary as $tary)
{
    $temp=array();
     //$temp['name']=$tary.name;
     //print_r($tary);
      if($tary->avatar_url==null||$tary->avatar_url==""){
              $temp['img']="https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png";
    }
      else
    {
      $temp['img']=($tary->avatar_url);
    }
               if(is_null($tary->name)||$tary->name==""||$tary->name=="null"||$tary->name=="\"\""){
               $temp['name']="Private validator";}
               else{
               $temp['name']=$tary->name;}
                $temp['version']=$tary->software_version;
                $temp['commission']=$tary->commission;
                $temp['identity']=$tary->account;
                if($tary->delinquent==""||$tary->delinquent==NULL)
                {
                    $temp['delinquent']="Nil";
                }
                else
                $temp['delinquent']=$tary->delinquent;
                 $temp['stake']=$tary->active_stake/100000000;
                  $temp['stake']=(int) $temp['stake']; 
                  $temp['poolstake']="no";
                 $temp['datacenter']=$tary->data_center_key;
                 $temp['datascore']=$tary->data_center_concentration_score;
                 $pieces = explode("-", $tary->data_center_key);
                 $temp['asn']=$pieces[0];;
                 $temp['skiprate']=$tary->skipped_slot_percent;
                 //echo "name : ". $temp['name']."<br>"."Skip : ". $temp['skiprate'];
                 $temp['votescore']=$tary->vote_distance_score;
                  $temp['apy']="Not found";
                  $temp['chist']="Not available";
                $temp['voteacc']=$tary->vote_account;
                array_push($outary,$temp);
}

//print_r($outary[1]);
echo "Length of out array ".count($outary)."<br>";
$ch1 = curl_init();

curl_setopt($ch1, CURLOPT_URL, 'https://api.stakesolana.app/v1/pools?sort=apy&desc=true&offset=0&limit=100');
curl_setopt($ch1, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch1, CURLOPT_CUSTOMREQUEST, 'GET');


$headers = array();
$headers[] = 'Accept: application/json';
curl_setopt($ch1, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch1);

if (curl_errno($ch1)) {
    echo 'Error:' . curl_error($ch1);
}
curl_close($ch1);
//echo $result;
$poolist=json_decode($result);

$limit=$poolist->meta_data->total_amount;
//echo $poolist;
//echo $limit;
$namelist=array();
$namelist=$poolist->data;
$parray=array();
foreach ($namelist as $x => $val) {
  $pname=$val->name;
  array_push($parray,$pname);
}
$vstary=array();
foreach ($parray as $m)
{
    $ch1 = curl_init();

curl_setopt($ch1, CURLOPT_URL, 'https://api.stakesolana.app/v1/pool-validators/'.$m.'?sort=apy&desc=true&offset=0&limit=10');
curl_setopt($ch1, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch1, CURLOPT_CUSTOMREQUEST, 'GET');


$headers = array();
$headers[] = 'Accept: application/json';
curl_setopt($ch1, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch1);
curl_close($ch1);
$newlist=json_decode($result);
$newlist=$newlist->data;
foreach ($newlist as $val) {
  $pname=$val->node_pk;
  if (array_key_exists($pname,$vstary))
  {
    //echo "found";
    $ptemp=array();
     $ptemp=$vstary[$pname];
     $english_format_number = number_format(round($val->pool_active_stake));
     $tm=$m.("(".($english_format_number).")");
    // $english_format_number = number_format($tm);
      array_push($ptemp,$tm);
   $vstary[$pname]=$ptemp;
  }
  else
  {
      $ptemp=array();
      $english_format_number = number_format(round($val->pool_active_stake));
       $tm=$m.("(".($english_format_number).")");
      array_push($ptemp,$tm);
   $vstary[$pname]=$ptemp;
  }
  
  
}
}
echo "Length of poolstake net array ".count($vstary)."<br>";
$i=0;
$tempary=array();
foreach ($outary as $m)
{
    if(array_key_exists( $m['identity'], $vstary))
    {
        $m['poolstake']="yes";
        $m['poollist']=$vstary[$m['identity']];
        //echo $m['name']."<br>\n";
        //echo $i." found\n<br>";
        //$i=$i+1;
    }
    array_push($tempary,$m);
}
$outary=$tempary;
echo "Length of out array after poolstake".count($outary)."<br>";

$ch1 = curl_init();
curl_setopt($ch1, CURLOPT_URL, 'https://stakeview.app/apy/prev3.json');
curl_setopt($ch1, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch1, CURLOPT_CUSTOMREQUEST, 'GET');
$result = curl_exec($ch1);
curl_close($ch1);
$apyary=array();
$apyary=json_decode($result);
echo "Length of apyarray".count($apyary->validators)."<br>";
$apyarray=array();
foreach($apyary->validators as $m)
{
    $tt[$m->id]=$m->apy;
  
}
//print_r($tt);
$tempary=array();
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://www.validators.app/api/v1/commission-changes/mainnet.json?per=5000');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');


$headers = array();

$headers[] = 'Token: oeEq99KiDv29gNn91mfzb7rK';
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}
curl_close($ch);

$chist=array();
$incrary=array();
$decrary=array();
$chist=json_decode($result)->commission_histories;
//print_r($chist);
foreach($chist as $a)
{
    $prev=$a->commission_before;
    $curr = $a->commission_after;
    if($prev==null)
    {
        $prev=0;
    }
    if($curr>$prev)
    {
         if(in_array( $a->account, $incrary))
        {
           
        }
        else
        {
            array_push($incrary,$a->account);
        }
    }
    else
    {
        if(in_array( $a->account, $decrary))
        {
           
        }
        else
        {
            array_push($decrary,$a->account);
        } 
    }
   
}
//echo "Length of commisson history array".count($histary)."<br>";
//print_r($histary);
$tempary=array();
$lt=0;


$datary=array();
for ($i=0;$i<=100;$i++)
{
    $ch1 = curl_init();

curl_setopt($ch1, CURLOPT_URL, 'https://kyc-api.vercel.app/api/validators/list?order_by=onboarding_number&order=desc&limit=100&offset='.$i*100);
curl_setopt($ch1, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch1, CURLOPT_CUSTOMREQUEST, 'GET');
$result = curl_exec($ch1);
curl_close($ch1);
$solary=json_decode($result);
$tary=array();
$tary=$solary->data;
foreach($tary as $a)
{
    if($a->state=="Approved")
    {
        $random=array();
        if(!empty($a->mn_stats->epochs)){
        $random[$a->mainnet_beta_pk]=end($a->mn_stats->epochs);
         array_push($datary,$random);}
        else
        $random[$a->mainnet_beta_pk]="Nil";
        array_push($datary,$random);
    }
}
}
//print_r($datary);
//var_dump($datary);
//echo "<br>";
foreach($outary as $k)
{
    if(array_key_exists($k['identity'],$tt))
    $k['apy']=$tt[$k['identity']];
    else
    {
        
    }
   // echo "index ".$tt[$k['identity']]."<br>";
   // echo $tt[$k['identity']]."<br>";
    $k['chist']="No change";
    if(in_array( $k['identity'], $incrary))
    {
        $k['chist']="Commission increased";
    }
     if(in_array( $k['identity'], $decrary))
    {
        $k['chist']="Commission decreased";
    }
    
    //echo $k[identity]."=".$k[apy]."\n";
   
   foreach($datary as $solary){
        if(array_key_exists( $k['identity'], $solary))
        {
           // echo "found <br>";
           // echo $k['identity']."<br>";
            $k['poolstake']="yes";
            $tmppoolary=array();
            $tmppoolary=$k['poollist'];
            if(!empty($tmppoolary))
            array_push($tmppoolary,"Foundation stake pool"."(".$solary[$k['identity']].")");
            else
             $tmppoolary[0]="Foundation stake pool"."(".$solary[$k['identity']].")";
             $k['poollist']= $tmppoolary;
             break;
        }
   }
    
    $temp=$k;
    //$stmt = $conn->prepare("insert into api(name,identity,voteacc,img,version,commission,delinquent,stake,poolstake,datacenter,datascore,asn,skiprate,votescore,chist,apy) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
   //  $stmt->bind_param("sssssisissiiiisd", $temp['name'],  $temp['identity'], $temp['voteacc'], $temp['img'], $temp['version'], $temp['commission'], $temp['delinquent'],$temp['stake'],$temp['poolstake'], $temp['datacenter'], $temp['datascore'] , $temp['asn'] ,$temp['skiprate'], $temp['votescore'] , $temp['chist'] , $temp['apy'] );
  //   $conn->set_charset('utf8mb4');
    //    $result = $stmt->execute();
      //  $stmt->close();
        //echo "error is ".$stmt->error."<br>";
        //echo "loop = ".$lt;
        //$lt++;
    array_push($tempary,$k);
}
echo "Length of final array".count($tempary)."<br>";
$msgary=array('error' => "none", 'array' => $tempary);
if (file_put_contents("data1.json",json_encode($msgary) ))
    echo "JSON file created successfully...";
else 
    echo "Oops! Error creating json file...";
$outary=$tempary;
//print_r($outary);
//var_dump(count($outary[999]));
//echo json_encode($outary[0]);
?>