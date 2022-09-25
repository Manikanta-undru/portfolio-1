
class Message extends React.Component {
    constructor(ren= true);
    function setRen(){
     ren = !ren;
   };
    
   function setRen(props) {
    // You can use Hooks here!
    return <div />;
  }
   render() {
     return (<React.Fragment>
           <a href="#" onClick={this.setRen()}>Want to buy a new car?</a>
           {ren && <p>Call +11 22 33 44 now!</p>}
         </React.Fragment>);
   }
 }
 
 document.body.innerHTML = "<div id='root'> </div>";
   
 const rootElement = document.getElementById("root");
 ReactDOM.render(<Message />, rootElement);
 
 console.log("Before click: " + rootElement.innerHTML);
 document.querySelector("a").click();
 console.log("After click: " + rootElement.innerHTML);