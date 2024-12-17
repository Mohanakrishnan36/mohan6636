import "./mainpage.css"
//import Left from './../page/Left';
import Right from './../page/Right';
import Center from './../page/Center';
import Middlebottom from './../page/Middlebottom';
import Rightbar from './../page/Rightbar';
import Middletop from './../page/Middletop';
import Middle from './../page/Middle';


export default function Page() {
  return (
    <>
   <div id="give">
   <div><Right/></div>
   <div>
   <Rightbar/>
    <Center/>
   <div id="mine">
    <Middletop/>
    <Middle/>
    <Middlebottom/></div>
    
    </div>
    </div>
    <h1 id="it">Copyright © 2024 BioBiz. All rights reserved.</h1>
    </>
   
    

    
    
  )
}
