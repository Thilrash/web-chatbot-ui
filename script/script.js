$(document).ready(()=>{
    $(".chatbox").hide();
    $(".chatbot-btn").click(()=>{ 
        $(".chatbox").slideToggle("slow");
    });
});