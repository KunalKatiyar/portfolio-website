<template>
<link href="https://fonts.googleapis.com/css2?family=Arvo:wght@700&display=swap" rel="stylesheet">
<div>
    <img src="../assets/KK.jpeg" alt="KK-Logo">
    <nav>
        <ul>
            <li><router-link to="/">Home</router-link></li> |
            <li><router-link to="/ProjectsSkills">Projects & Skills</router-link></li> |
            <li><router-link to="/Blog">Blog</router-link></li> |
            <li><router-link to="/Contact">Contact</router-link></li>
        </ul>
    </nav>
    <hr>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
img{
    padding: 0px 30px;
    width: 60px;
    height: 60px;
    float: left;
}
ul{
    padding: 0px 0px 0px 800px;
    display: inline-block;
    overflow: hidden;
}
li{
    font-size: 20px;
    display: inline-block;
    margin: 0 20px;
    border-bottom: 3px solid transparent;
}
a{
    text-decoration: none;
    font-family: "Arvo", serif;
}
.router-link-exact-active{
    border-bottom: 3px solid red;
}
hr{
    height:3px;
    border-width:0;
    color:black;
    background-color:black;
}
</style>