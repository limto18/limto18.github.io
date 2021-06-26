function valideContact()
{
    var username = document.getElementsByName("noms")[0].value;

    if ( username.length<2){
        document.getElementById('messageContact').innerHTML="Entrez au moin 2 Caractères !"; 
        document.getElementById('messageContact').style.color='red';
        return (true);}
    else
        document.getElementById('messageContact').style.color='white';
        document.getElementById('messageContact').innerHTML='Valid';
        
        return (false)
}