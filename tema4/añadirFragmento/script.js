import { posts } from "./array.js"

posts.forEach(element => {
    document.getElementById('container').innerHTML += "TITULO  " + element.title + "<br>" + "CUERPO  " + element.body + "<br><br><br>";
});