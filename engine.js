//SISTEMA DE NAVEGAÇÃO PARA O RAGNAHELLS @ 2012
$(document).ready(function() {
    //MENU
    var menu = new Array(
        {id: 'home', desc: 'HOME'}
        , {id: 'registro', desc: 'REGISTRO'}
        , {id: 'info', desc: 'INFORMAÇÕES'}
        , {id: 'forum', desc: 'FORUM'}
        , {id: "facebook", desc: "FACEBOOK"}
        , {id: 'downloads', desc: 'DONWLOADS'}
        , {id: 'doar', desc: 'DOAR'}
    );
    for (var i in menu)
    {
        var a_tag = '<a href="#" class="menu" id="'+menu[i]['id']+'"> '+menu[i]['desc']+' </a>';
        $("#timao nav").append(a_tag);
    }
    
    //NAVIGATOR
    $("a#facebook").click(function(){
        window.location.replace("https://www.facebook.com/RagnaHells");
    });
    $("a#forum").click(function(){
        window.location.replace("http://ragnahells.forumeiros.com/");
    });
    $("a.menu").click(function(){
        $("#lousa #texto").html($('<img>', {
            src: 'img/aguarde.gif'
            , alt: 'carregando...'
        }));
        var url = 'ajax/' + $(this).attr('id') + '.html';
        var img_tag = $('<img>', {
            src: 'img/' + $(this).attr('id') + '.png'
            , alt: $(this).html()
        });
        $("#lousa #imagem").html(img_tag);
        $("#lousa h1").html($(this).html());
        $.post(url,null, function(resposta){
            $("#lousa #texto").empty();
            $("#lousa #texto").append(resposta);
        });
    });
    $("a#home").click();
    
    //FOOTER COPYRIGHT
    var date = new Date();
    var rodape = '<p>©Copyright ' + date.getFullYear() + '</p>';
    $("#copyright").append(rodape);
});
