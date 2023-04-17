$(document).ready(function () {
  //Request Cidades


  $('#estados').change(function () {
    let estado = $(this).val();
    let id = 0;

    switch (estado) {
      case 'Rondônia':
        id = 11;
        break;
      case 'Acre':
        id = 12;
        break;
      case 'Amazonas':
        id = 13;
        break;
      case 'Roraima':
        id = 14;
        break;
      case 'Pará':
        id = 15;
        break;
      case 'Amapá':
        id = 16;
        break;
      case 'Tocantins':
        id = 17;
        break;
      case 'Maranhão':
        id = 21;
        break;
      case 'Piauí':
        id = 22;
        break;
      case 'Ceará':
        id = 23;
        break;
      case 'Rio Grande do Norte':
        id = 24;
        break;
      case 'Paraíba':
        id = 25;
        break;
      case 'Pernambuco':
        id = 26;
        break;
      case 'Alagoas':
        id = 27;
        break;
      case 'Sergipe':
        id = 28;
        break;
      case 'Bahia':
        id = 29;
        break;
      case 'Minas Gerais':
        id = 31;
        break;
      case 'Espírito Santo':
        id = 32;
        break;
      case 'Rio de Janeiro':
        id = 33;
        break;
      case 'São Paulo':
        id = 35;
        break;
      case 'Paraná':
        id = 41;
        break;
      case 'Santa Catarina':
        id = 42;
        break;
      case 'Rio Grande do Sul':
        id = 43;
        break;
      case 'Mato Grosso do Sul':
        id = 50;
        break;
      case 'Mato Grosso':
        id = 51;
        break;
      case 'Goiás':
        id = 52;
        break;
      case 'Distrito Federal':
        id = 53;
        break;
      default:
        id = 0;
    }

    //console.log(id);
    $.getJSON(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados/' +
      id +
      '/municipios',
      function (res) {
        //console.log($(this).val());
        var nome = '';

        var html =
          '<option value="select" disabled selected hidden>cidade</option>';

        for (i = 0; i < res.length; i++) {
          nome = res[i].nome;
          html += '<option value="' + nome + '">' + nome + '</option>';
        }

        $('#cidades').html(html);
        $('.field').removeClass('background-img');
        $('#cidades').attr('disabled', false);
      },
    );

  });

  /*form de contato*/

  $('#tel').mask('(00) 000000009');

  $('#form').on('submit', function (e) {
    // e.preventDefault();

    var nome = $(this).find('input[name=name]').val();
    var tel = $(this).find('input[name=personal_phone]').val();
    var email = $(this).find('input[name=email]').val();
    var estados = $('#estados option:selected').val();
    var cidades = $('#cidades option:selected').val();
    var curso = $('#curso option:selected').val();
    var pesquisa = $('#pesquisa option:selected').val();

    if (nome == '') {
      $('#nome')
        .css({ 'border-bottom': '1px solid #FF0005' })
        .addClass('transition');
    }
    if (tel.length < 13) {
      $('#tel')
        .css({ 'border-bottom': '1px solid #FF0005' })
        .addClass('transition');
    }
    if (email == '') {
      $('#email')
        .css({ 'border-bottom': '1px solid #FF0005' })
        .addClass('transition');
    }
    if (estados == 'select') {
      $('#estados')
        .css({ 'border-bottom': '1px solid #FF0005' })
        .addClass('transition');
    }
    if (cidades == 'select') {
      $('#cidades')
        .css({ 'border-bottom': '1px solid #FF0005' })
        .addClass('transition');
    }
    if (curso == 'select') {
      $('#curso')
        .css({ 'border-bottom': '1px solid #FF0005' })
        .addClass('transition');
    }
    if (pesquisa == 'select') {
      $('#pesquisa')
        .css({ 'border-bottom': '1px solid #FF0005' })
        .addClass('transition');
    }

    if (
      nome == '' ||
      tel == '' ||
      tel.length < 13 ||
      email == '' ||
      estados == 'select' ||
      cidades == 'select' ||
      curso == 'select' ||
      pesquisa == 'select'
    ) {
      return false;
    }
  });

  $('#nome').on('blur', function () {
    var nome = $('#form').find('input[name=name]').val();
    if (nome != '') {
      $('#nome').css({ 'border-bottom': '1px solid #e3e3e3' });
    }
  });
  $('#email').on('blur', function () {
    var email = $('#form').find('input[name=email]').val();
    if (email != '') {
      $('#email').css({ 'border-bottom': '1px solid #e3e3e3' });
    }
  });
  $('#tel').on('blur', function () {
    var tel = $('#form').find('input[name=personal_phone]').val();
    if (tel != '') {
      $('#tel').css({ 'border-bottom': '1px solid #e3e3e3' });
    }
  });
  $('#estados').on('click', function () {
    var estados = $('#estados option:selected').val();
    if (estados != 'select') {
      $('#estados').css({ 'border-bottom': '1px solid #e3e3e3' });
    }
  });
  $('#cidades').on('click', function () {
    var cidades = $('#cidades option:selected').val();
    if (cidades != 'select') {
      $('#cidades').css({ 'border-bottom': '1px solid #e3e3e3' });
    }
  });
  $('#curso').on('click', function () {
    var curso = $('#curso option:selected').val();
    if (curso != 'select') {
      $('#curso').css({ 'border-bottom': '1px solid #e3e3e3' });
    }
  });
  $('#pesquisa').on('click', function () {
    var pesquisa = $('#pesquisa option:selected').val();
    if (pesquisa != 'select') {
      $('#pesquisa').css({ 'border-bottom': '1px solid #e3e3e3' });
    }
  });
});
