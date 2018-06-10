$(document).ready(function() {


    var materias = ["4320301", "4320198", "MAP2121", "MAT2454", "MAT2458", "PCC2122", "PME2100", "PMT2100", "PCC2301", "4320404",
        "MAT2456", "PCC2200", "PEA2290", "PEF2201", "PHD2218", "PRO2201", "PTR2202", "PCC2435", "PCC2346", "PCC2361", "PEF2302", "PEF2305", "PHD2304",
        "PRO2206", "PTR2377", "PEF2304", "PRO2303", "PTR2451", "PEF2405", "PCC2410", "PCC2436", "PCC2466", "PEF2404", "PHD2412", "PHD2415", "300002",
        "PTR2580 (E)", "PCC2652 (E)", "PEF3113 (E)", "300021", "302502", "PCC2507", "PCC2510", "PCC2521", "PCC2527", "PCC2540", "PCC3506", "PEF2502",
        "PEF2504", "PEF2506", "PEF2508", "PEF2510", "PEF2512"
    ];
    $("#botao_like").click(function(event) {
        confirm( "Obrigado por contribuir com o Cronos! Gostaria de fazer outra grade?" );
        location.reload();
      });
      $("#botao_dislike").click(function(event) {
            modal.style.display = "block";
        });
      $("#botao_final").click(function(event) {
            confirm( "Respostas recebidas! Obrigado por contribuir com o Cronos!" );
            location.reload();
          });
    $( ".login" ).click(function() {

             if ($("#user").val() == 8610203 && $("#pass").val() == 123456){
               window.location.href = "./aluno.html";
             }
             else if ($("#user").val() == 123456 && $("#pass").val() == 123456){
               window.location.href = "./prof_tabela.html";
             }
           });

    $("#botao_grade").click(function(event) {
        var yourArray = [];
        //alert( "Handler for .submit() called." );
        $(".vermelho").each(function() {

            yourArray.push($(this).text());


            if (0 <= $.inArray($(this).text(), materias) && $.inArray($(this).text(), materias)  <= 4) {
                if ($("#1").text() == "") {
                    $("#1").html($(this).text());
                } else if (($("#8").text() == "")) {
                    $("#8").html($(this).text());
                } else if (($("#3").text() == "")) {
                    $("#3").html($(this).text());
                } else if (($("#10").text() == "")) {
                    $("#10").html($(this).text());
                } else if (($("#5").text() == "")) {
                    $("#5").html($(this).text());
                } else if (($("#7").text() == "")) {
                    $("#7").html($(this).text());
                } else if (($("#2").text() == "")) {
                    $("#2").html($(this).text());
                } else if (($("#9").text() == "")) {
                    $("#9").html($(this).text());
                } else if (($("#4").text() == "")) {
                    $("#4").html($(this).text());
                } else if (($("#11").text() == "")) {
                    $("#11").html($(this).text());
                }
            } else if (5 <= $.inArray($(this).text(), materias) && $.inArray($(this).text(), materias) <= 9) {
                if ($("#19").text() == "") {
                    $("#19").html($(this).text());
                } else if (($("#26").text() == "")) {
                    $("#26").html($(this).text());
                } else if (($("#21").text() == "")) {
                    $("#21").html($(this).text());
                } else if (($("#28").text() == "")) {
                    $("#28").html($(this).text());
                } else if (($("#23").text() == "")) {
                    $("#23").html($(this).text());
                } else if (($("#25").text() == "")) {
                    $("#25").html($(this).text());
                } else if (($("#20").text() == "")) {
                    $("#20").html($(this).text());
                } else if (($("#27").text() == "")) {
                    $("#27").html($(this).text());
                } else if (($("#22").text() == "")) {
                    $("#22").html($(this).text());
                } else if (($("#29").text() == "")) {
                    $("#29").html($(this).text());
                }

            } else if (10 <= $.inArray($(this).text(), materias) && $.inArray($(this).text(), materias) <= 14) {
                if ($("#1").text() == "") {
                    $("#1").html($(this).text());
                } else if (($("#8").text() == "")) {
                    $("#8").html($(this).text());
                } else if (($("#3").text() == "")) {
                    $("#3").html($(this).text());
                } else if (($("#10").text() == "")) {
                    $("#10").html($(this).text());
                } else if (($("#5").text() == "")) {
                    $("#5").html($(this).text());
                } else if (($("#7").text() == "")) {
                    $("#7").html($(this).text());
                } else if (($("#2").text() == "")) {
                    $("#2").html($(this).text());
                } else if (($("#9").text() == "")) {
                    $("#9").html($(this).text());
                } else if (($("#4").text() == "")) {
                    $("#4").html($(this).text());
                } else if (($("#11").text() == "")) {
                    $("#11").html($(this).text());
                }

            } else if (15 <= $.inArray($(this).text(), materias) && $.inArray($(this).text(), materias) <= 19) {
              if ($("#19").text() == "") {
                  $("#19").html($(this).text());
              } else if (($("#26").text() == "")) {
                  $("#26").html($(this).text());
              } else if (($("#21").text() == "")) {
                  $("#21").html($(this).text());
              } else if (($("#28").text() == "")) {
                  $("#28").html($(this).text());
              } else if (($("#23").text() == "")) {
                  $("#23").html($(this).text());
              } else if (($("#25").text() == "")) {
                  $("#25").html($(this).text());
              } else if (($("#20").text() == "")) {
                  $("#20").html($(this).text());
              } else if (($("#27").text() == "")) {
                  $("#27").html($(this).text());
              } else if (($("#22").text() == "")) {
                  $("#22").html($(this).text());
              } else if (($("#29").text() == "")) {
                  $("#29").html($(this).text());
              }

            } else if (20 <= $.inArray($(this).text(), materias) && $.inArray($(this).text(), materias) <= 24) {
                if ($("#1").text() == "") {
                    $("#1").html($(this).text());
                } else if (($("#8").text() == "")) {
                    $("#8").html($(this).text());
                } else if (($("#3").text() == "")) {
                    $("#3").html($(this).text());
                } else if (($("#10").text() == "")) {
                    $("#10").html($(this).text());
                } else if (($("#5").text() == "")) {
                    $("#5").html($(this).text());
                } else if (($("#7").text() == "")) {
                    $("#7").html($(this).text());
                } else if (($("#2").text() == "")) {
                    $("#2").html($(this).text());
                } else if (($("#9").text() == "")) {
                    $("#9").html($(this).text());
                } else if (($("#4").text() == "")) {
                    $("#4").html($(this).text());
                } else if (($("#11").text() == "")) {
                    $("#11").html($(this).text());
                }

            } else if (25 <= $.inArray($(this).text(), materias) && $.inArray($(this).text(), materias) <= 29) {

              if ($("#19").text() == "") {
                  $("#19").html($(this).text());
              } else if (($("#26").text() == "")) {
                  $("#26").html($(this).text());
              } else if (($("#21").text() == "")) {
                  $("#21").html($(this).text());
              } else if (($("#28").text() == "")) {
                  $("#28").html($(this).text());
              } else if (($("#23").text() == "")) {
                  $("#23").html($(this).text());
              } else if (($("#25").text() == "")) {
                  $("#25").html($(this).text());
              } else if (($("#20").text() == "")) {
                  $("#20").html($(this).text());
              } else if (($("#27").text() == "")) {
                  $("#27").html($(this).text());
              } else if (($("#22").text() == "")) {
                  $("#22").html($(this).text());
              } else if (($("#29").text() == "")) {
                  $("#29").html($(this).text());
              }

            } else if (30 <= $.inArray($(this).text(), materias) && $.inArray($(this).text(), materias) <= 34) {
                if ($("#1").text() == "") {
                    $("#1").html($(this).text());
                } else if (($("#8").text() == "")) {
                    $("#8").html($(this).text());
                } else if (($("#3").text() == "")) {
                    $("#3").html($(this).text());
                } else if (($("#10").text() == "")) {
                    $("#10").html($(this).text());
                } else if (($("#5").text() == "")) {
                    $("#5").html($(this).text());
                } else if (($("#7").text() == "")) {
                    $("#7").html($(this).text());
                } else if (($("#2").text() == "")) {
                    $("#2").html($(this).text());
                } else if (($("#9").text() == "")) {
                    $("#9").html($(this).text());
                } else if (($("#4").text() == "")) {
                    $("#4").html($(this).text());
                } else if (($("#11").text() == "")) {
                    $("#11").html($(this).text());
                }

            } else if (35 <= $.inArray($(this).text(), materias) && $.inArray($(this).text(), materias) <= 39) {
              if ($("#19").text() == "") {
                  $("#19").html($(this).text());
              } else if (($("#26").text() == "")) {
                  $("#26").html($(this).text());
              } else if (($("#21").text() == "")) {
                  $("#21").html($(this).text());
              } else if (($("#28").text() == "")) {
                  $("#28").html($(this).text());
              } else if (($("#23").text() == "")) {
                  $("#23").html($(this).text());
              } else if (($("#25").text() == "")) {
                  $("#25").html($(this).text());
              } else if (($("#20").text() == "")) {
                  $("#20").html($(this).text());
              } else if (($("#27").text() == "")) {
                  $("#27").html($(this).text());
              } else if (($("#22").text() == "")) {
                  $("#22").html($(this).text());
              } else if (($("#29").text() == "")) {
                  $("#29").html($(this).text());
              }

            }




            //alert($(this).text());
        });
        //alert(yourArray)

    });


    $(".celula_grade").click(function() {
        if ($(this).hasClass("vermelho")) {
            $(this).removeClass('vermelho');
        } else {
            $(this).addClass('vermelho');
        }
    });
});


// if ($(this).is('.escondido')) {
//             $(this).removeClass('escondido');
//             $('.triplo').addClass('hidden');
//             $('.direita').addClass('hidden');
//             $('.' + $(this).attr('id')).removeClass('hidden')
//         } else {
//             $(this).addClass('escondido');
//             $('.' + $(this).attr('id')).addClass('hidden');
//         }

//    //Código para abrir o modal que seleciona as capturas
//    $(document).on("click", "#capturas", function () {
//            $("#modal_captura").modal({
//                backdrop: "static"
//        });
//    });
//
//
//    //FUNÇÃO ATIVA QUANDO SE CANCELA A FINALIZAÇÃO DE UM PEDIDO
//    function formCancela (){
//        $("#modalConfirma").modal("hide");
//    }
//
//    // FUNÇÃO QUE É ATIVA QUANDO SE DESEJA FINALIZAR UM PEDIDO ATRAVÉS DO BOTÃO DE FINALIZAÇÃO
//    function submitFinaliza (order_id, pedido_erp, numero_id, user){
//
//                justificativa = $('#textArea').val();
//                if (justificativa.length > 0) {
//                event.preventDefault();
//                $("#ORDER_ID").html(order_id);
//                $('#' + $("#ORDER_ID").html()).removeClass('escondivel' + numero_id);
//                $('#' + $("#ORDER_ID").html()).fadeOut('slow');
//
//                $('#textArea').val('');
//                $("#modalConfirma").modal("hide");
//                //Esse Ajax fará o link com a tb_log_front
//                $.ajax({
//                     type: "POST",
//                     url: "exclui_linha.php",
//                     data: "order_id=" + order_id + "&justificativa=" + justificativa + "&pedido_erp=" + pedido_erp + "&usuario=" + user,
//                     success: function(text) {
//                     }
//        });
//                }
//                }
//
//  //FUNCAO ATIVA QUANDO O PEDIDO É DESATIVADO ATRAVÉS DO MODAL
// function finalizaModal (order_id, pedido_erp, user){
//                justificativa = $('#textArea').val();
//                if (justificativa.length > 0) {
//                event.preventDefault();
//                $("#ORDER_ID").html(order_id);
//
//                $('#' + order_id).fadeOut('slow');
//                $('#' + order_id).addClass('inativo');
//                $('#textArea').val('');
//                $("#modalConfirma").modal("hide");
//
//                //Esse Ajax fará o link com a tb_log_front
//                $.ajax({
//                     type: "POST",
//                     url: "exclui_linha.php",
//                     data: "order_id=" + order_id + "&justificativa=" + justificativa + "&pedido_erp=" + pedido_erp + "&usuario=" + user,
//                     success: function(text) {
//                         $("#myModal").modal("hide");
//                     }
//        });
//                }
// }
//
//
//    //CÓDIGO DE FINZALIZAÇÃO DE PEDIDOS
//    $(document).on("click", ".botao_finaliza", function () {
//            order_id = $(this).closest('tr').attr('id');
//            pedido_erp = $(this).closest('tr').attr('data');
//            user = $('#user').attr('class');
//
//            $(this).removeClass('botao_finaliza');
//            var numero_id = $(this).attr('class');
//            $(this).addClass('botao_finaliza');
//            // Aqui é criado o modal
//            $("#modalConfirma").modal({
//                backdrop: "static"
//            });
//
//            $('#texto_confirma').html('Order ID: ' + order_id + ', logado como ' + user + '?');
//
//            //Caso o botão de confirmação seja apertado
//            $("#form_finaliza").submit(function(event) {
//               submitFinaliza(order_id,pedido_erp,numero_id, user);
//            });
//            //Caso o botão de cancelar seja apertado
//            $("#form_cancela").click(function() {
//                delete order_id;
//                delete pedido_erp;
//                delete user;
//                formCancela();
//            });
//        });
//
//     //CÓDIGO DE FINZALIZAÇÃO DE PEDIDOS ATRAVÉS DO MODAL
//    $(document).on("click", "#botao_desativa", function () {
//            order_id = $('#order_modal').text().trim();
//            pedido_erp = $('#pedido_modal').text().trim();
//            user = $('#user').attr('class');
//            // Aqui é criado o modal
//            $("#modalConfirma").modal({
//                backdrop: "static"
//            });
//
//            $('#texto_confirma').html('Order ID: ' + order_id + ', logado como ' + user + '?');
//
//            //Caso o botão de confirmação seja apertado
//            $("#form_finaliza").submit(function(event) {
//               finalizaModal(order_id,pedido_erp, user);
//            });
//            //Caso o botão de cancelar seja apertado
//            $("#form_cancela").click(function() {
//                delete order_id;
//                delete pedido_erp;
//                delete user;
//                formCancela();
//            });
//        });
//
// //CÓDIGO DE ATIVAÇÃO DE PEDIDOS ATRAVÉS DO MODAL
//    $(document).on("click", "#botao_ativa", function () {
//            order_id = $('#order_modal').text().trim();
//            pedido_erp = $('#pedido_modal').text().trim();
//            user = $('#user').attr('class');
//            confirma = confirm("Tem certeza que deseja ativar este pedido?");
//            if (confirma == true){
//                $('#' + order_id).fadeIn('slow');
//                $('#' + order_id).removeClass('inativo');
//                //Esse Ajax fará o link com a tb_log_front
//                $.ajax({
//                     type: "POST",
//                     url: "inclui_linha.php",
//                     data: "order_id=" + order_id + "&pedido_erp=" + pedido_erp,
//                     success: function(text) {
//                         $("#myModal").modal("hide");
//                     }
//        });
//
//            }
//
//        });
//
//
//    $(function() {
//
//        tabela_direita();
//
//        var $pedidos = $('.contador').attr('id');
//
//        //Função ativa ao se pesquisar capturas
//        $('.navbar-captura').submit(function() {
//            submitForm();
//            $("#myModal").modal({
//                backdrop: "static"
//            });
//            return false;
//        });
//
//        $("#textArea").attr('maxlength', '250');
//
//        // CÓDIGO DA PICKLIST
//
//        $.fn.pickList = function(options) {
//            var opts = $.extend({}, $.fn.pickList.defaults, options);
//            this.fill = function() {
//                var option = '';
//                $.each(opts.data, function(key, val) {
//                    option += '<option id=' + val.id + '>' + val.text + '</option>';
//                });
//                this.find('#pickData').append(option);
//            };
//            this.controll = function() {
//                var pickThis = this;
//                $("#pAdd").on('click', function() {
//                    var p = pickThis.find("#pickData option:selected");
//                    p.clone().appendTo("#pickListResult");
//                    p.remove();
//                });
//                $("#pAddAll").on('click', function() {
//                    var p = pickThis.find("#pickData option");
//                    p.clone().appendTo("#pickListResult");
//                    p.remove();
//                });
//                $("#pRemove").on('click', function() {
//                    var p = pickThis.find("#pickListResult option:selected");
//                    p.clone().appendTo("#pickData");
//                    p.remove();
//                });
//                $("#pRemoveAll").on('click', function() {
//                    var p = pickThis.find("#pickListResult option");
//                    p.clone().appendTo("#pickData");
//                    p.remove();
//                });
//            };
//            this.getValues = function() {
//                var objResult = [];
//                this.find("#pickListResult option").each(function() {
//                    objResult.push({
//                        id: this.id,
//                        text: this.text
//                    });
//                });
//                return objResult;
//            };
//            this.init = function() {
//                var pickListHtml =
//                    "<div class='row'>" +
//                    "  <div class='col-sm-5'>" +
//                    "	 <select class='form-control pickListSelect' id='pickData' multiple></select>" +
//                    " </div>" +
//                    " <div class='col-sm-2 pickListButtons'>" +
//                    "	<button id='pAdd' class='btn btn-primary btn-sm'>" + opts.add + "</button>" +
//                    "      <button id='pAddAll' class='btn btn-primary btn-sm'>" + opts.addAll + "</button>" +
//                    "	<button id='pRemove' class='btn btn-primary btn-sm'>" + opts.remove + "</button>" +
//                    "	<button id='pRemoveAll' class='btn btn-primary btn-sm'>" + opts.removeAll + "</button>" +
//                    " </div>" +
//                    " <div class='col-sm-5'>" +
//                    "    <select class='form-control pickListSelect' id='pickListResult' multiple></select>" +
//                    " </div>" +
//                    "</div>";
//                this.append(pickListHtml);
//                this.fill();
//                this.controll();
//            };
//            this.init();
//            return this;
//        };
//
//        $.fn.pickList.defaults = {
//            add: 'Adicionar',
//            addAll: 'Adicionar todos',
//            remove: 'Remover',
//            removeAll: 'Remover todos'
//        };
//
//        //CÓDIGO DA SELEÇÃO DE CAPTURAS
//        var val = {
//            01: {
//                id: 2,
//                text: 'Vtex - avon'
//            },
//            02: {
//                id: 3,
//                text: 'Vtex - korres'
//            },
//            03: {
//                id: 8,
//                text: 'Vtex - avonincompany'
//            },
//            04: {
//                id: 6,
//                text: 'Vtex - kopenhagen'
//            },
//            05: {
//                id: 1,
//                text: 'Vtex - brasilct'
//            },
//            06: {
//                id: 4,
//                text: 'Vtex - mattel'
//            },
//            07: {
//                id: 5,
//                text: 'Vtex - disney'
//            },
//            08: {
//                id: 7,
//                text: 'Vtex - disneyb2c'
//            },
//            09: {
//                id: 9,
//                text: 'Vtex - dinap'
//            },
//            10: {
//                id: 10,
//                text: 'Vtex - dinapb2c'
//            },
//            11: {
//                id: 11,
//                text: 'Vtex - avonluxe'
//            },
//            12: {
//                id: 12,
//                text: 'SSB - AVN'
//            },
//            13: {
//                id: 13,
//                text: 'SSB - KOP'
//            },
//            14: {
//                id: 24,
//                text: 'SSB - GRE'
//            },
//            15: {
//                id: 25,
//                text: 'SSB - DIS'
//            },
//            16: {
//                id: 14,
//                text: '00K - shopping'
//            },
//            17: {
//                id: 15,
//                text: '00K - disney-mattel'
//            },
//            18: {
//                id: 16,
//                text: 'Skyhub - Main Retail'
//            },
//            19: {
//                id: 17,
//                text: 'Skyhub - Submarino'
//            },
//            20: {
//                id: 18,
//                text: 'Skyhub - Lojas Americanas'
//            },
//            21: {
//                id: 19,
//                text: 'Skyhub - Sou Barato'
//            },
//            22: {
//                id: 20,
//                text: 'Skyhub - Shoptime'
//            },
//            23: {
//                id: 21,
//                text: 'Skyhub - Brasil CT B2W'
//            },
//            24: {
//                id: 22,
//                text: 'Skyhub - Extra'
//            },
//            25: {
//                id: 23,
//                text: 'Skyhub - Walmart'
//            }
//        };
//
//        var pick = $("#pickList").pickList({
//            data: val
//        });
//
//        $("#getSelected").click(function() {
//
//            console.log(pick.getValues());
//            var picklist = JSON.stringify(pick.getValues());
//
//            $.ajax({
//                type: "POST",
//                url: "capturas.php",
//                data: "OBJ=" + picklist,
//                beforeSend: function(){
//                    $("#modal_captura").modal("hide");
//                },
//                success: function(text) {
//                    $(".container-principal").html(text);
// //                   document.write(text);
//                    //               $("#T").html(text);
//                },
//                //função que executará a tabela da direita
//                complete: function(text) {
//                    $(".div_direita").each(function() {
//                        var id = $(this).attr('id')
//                        $("#" + id).removeClass('div_direita');
//                        var classe = $(this).attr('class')
//                        $.ajax({
//                            type: "POST",
//                            url: "tb_direita_captura.php",
//                            data: "id=" + id + "&classe=" + classe + "&OBJ=" + picklist ,
//                            success: function(text) {
//                                $("#" + classe).removeClass("hidden");
//                                $("#tb_direita").append(text);
//                            }
//                        });
//                    });
//
//                }
//
//            });
//
//
//        });
//
//
//    });
