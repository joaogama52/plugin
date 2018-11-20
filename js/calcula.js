$(function(){
    
    var v1, v2, op;
    
    $("input[name=btn]").click(function(){
        $("#resultado").val($("#resultado").val() + $(this).val());

    })
    
    $("input[name=ce]").click(function(){
        $("#resultado").val("");

    })
    
    $("input[name=c]").click(function(){
        var len = $("#resultado").val().length;


        var valor = $("#resultado").val();
        
        valor = valor.replace(valor.charAt(len - 1), "");

        $("#resultado").val(valor);
    })
    
    $("input[name=soma]").click(function(){
        if($("#resultado").val() != ""){
            v1 = parseFloat($("#resultado").val());
            $("#resultado").val("");
            op = "soma";
        }else{
            alert("Insira um valor para a soma");
        }
    })
    
    $("input[name=subtracao]").click(function(){
        if($("#resultado").val() != ""){
            v1 = parseFloat($("#resultado").val());
            $("#resultado").val("");
            op = "subtracao";
        }else{
            alert("Insria um valor para a subtração");
        }
    })
    
    $("input[name=multiplicacao]").click(function(){
        if($("#resultado").val() != ""){
            v1 = parseFloat($("#resultado").val());
            $("#resultado").val("");
            op = "multiplicacao";
        }else{
            alert("Insira um valor para a multiplicação");
        }
    })
    
    $("input[name=divisao]").click(function(){
        if($("#resultado").val() != ""){
            v1 = parseFloat($("#resultado").val());
            $("#resultado").val("");
            op = "divisao";
        }else{
            alert("Insira um valor para a divisão");
        }
    })
    
    $("input[name=igual]").click(function(){
        if($("#resultado").val() != ""){
            v2 = parseFloat($("#resultado").val());
            $("#resultado").val("");
            
            if(op == "soma"){
                $("#resultado").val(v1+v2);
            }
            
            if(op == "subtracao"){
                $("#resultado").val(v1-v2);
            }
            
            if(op == "multiplicacao"){
                $("#resultado").val(v1*v2);
            }
            
            if(op == "divisao"){
                $("#resultado").val(v1/v2);
            }
            
            
        }else{
            alert("Digite outro valor para a efetuação do cálculo");
        }
    })
    
});