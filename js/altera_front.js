//*****************BEGIN COMPONENTES**************************************
const aw = 'Anywhere Tecnologias';
const btform = document.getElementById('bt-form');
const btformc = document.getElementById('btn_salvar');
const btformcep = document.getElementById('bt-form-cep');
const txtemail = document.getElementsByName('email-news');
const btbutton_addon2 = document.getElementById('button-addon2');
const rdflexRadioDefault = document.getElementsByName('flexRadioDefault');
const rdflexRadioDefault_sim = document.getElementsByName('flexRadioDefault-sim');
const campos = document.getElementsByName('contato'); 
const form = document.getElementsByTagName("form");
const rdflexRadioDefault1 = document.getElementById('flexRadioDefault1');
const rdflexRadioDefault2 = document.getElementById('flexRadioDefault2');
const sim = document.getElementById('sim');
const rdflexRadioDefault1asim = document.getElementById('flexRadioDefault1-a-sim');
const rdflexRadioDefault2bsim = document.getElementById('flexRadioDefault2-b-sim');
const porque = document.getElementById('porque');
const nav_li = document.getElementById('nav-li');
const mais_ecommerce = document.getElementsByName('ecommerce-info');
const mais_awecommerce = document.getElementsByName('awecommerce-info');
const mais_website = document.getElementsByName('website-info');
const mais_marketing = document.getElementsByName('marketing-info');
const mais_aplicativo = document.getElementsByName('aplicativo-info');
const mark_4A = document.getElementById('create-marketing-A');
const mark_4B = document.getElementById('create-marketing-B');
const mark_3 = document.getElementById('create-marketing-C');
const mark_8A = document.getElementById('create-marketing-D');
const mark_8B = document.getElementById('create-marketing-E');
const mark_9B = document.getElementById('create-marketing-F');
const mark_6A = document.getElementById('par');
const mark_6B = document.getElementById('impar');
const mark_6Ah = document.getElementById('parh');
const mark_6Bh = document.getElementById('imparh');
const logo_link = document.getElementsByName('logo-link');
//*****************END COMPONENTES**************************************
//******************BEGIN VARIAVEIS*************************************
const whmcs_login = 'https://anywhere-tecnologias.com.br/whmcs/login';
const whmcs_registro = 'https://anywhere-tecnologias.com.br/whmcs/register.php';
const whmcs_hospedagem = 'https://anywhere-tecnologias.com.br/whmcs/store/hospedagem';
const whmcs_contato = 'https://anywhere-tecnologias.com.br/whmcs/contact.php';

const index_pag = 'index.php?pag=';
const index = 'index';
const ecommerce = 'Loja Virtual';
const awecommerce = '';//'AW-E-commerce';
const aplicativos = '';//'Aplicativos';
const website = 'Website';
const marketing = '';//'Marketing';
const agora = '';//'Agora';
const acesso = 'Login';
const registro = 'Registre-se';
const planos = 'Planos';
const pesquisa = '';//'Pesquisa';
const contato = 'Contato';
const array_nav = ['Home',pesquisa,ecommerce, website,acesso,registro, planos, agora, aplicativos, awecommerce, contato];
const img_dir = 'img/';
var obj_mar4 = [
    {titulo:'Aplicativo para sua Loja Virtual', img:'app-development-illustration_52683-47931.svg'},
    {titulo:'Programador a sua Disposição',     img:'pexels-photo-1181467.svg'},
    {titulo:'Suporte rápido via WhatsApp',      img:'support-staff_1212-30.svg'},    
    {titulo:'Hospedagem',                       img:'datacenter.svg'},
    {titulo:'Cuidamos do seu Domínio',          img:'registro-de-dominio.svg'},
    {titulo:'Segurança da Informação',          img:'download.svg'},
    {titulo:'Tecnologia SEO',                   img:'SEO-google.svg'}
];
var obj_mar6 = [
    {
        titulo:'Domínio', 
        texto:'Registramos e administramos  os domínios de nossos clientes.\n\
        Para ter um negócio na internet, o registro de domínio é o primeiro passo a ser dado. \n\
        Ele será o endereço do seu site, loja virtual , aplicativos, sistemas web ou e-mail profissional.'
    },
    {
        titulo:'Contas de e-mail', 
        texto:'Tenha contas de e-mail profissional para sua empresa.\n\
        E-mail profissional deixa sua empresa com segurança e credibilidade para seus clientes.'
    },
    {
        titulo:'Consultoria especializada em E-commerce', 
        texto:'Com a '+aw+', você não fica na mão. \n\
        Estamos sempre atualizando nossos clientes dentro do mundo do e-commerce.Gerenciamento e \n\
        configurações da Loja Virtual.'
    },    
    {
        titulo:'Segurança da Informação',
        texto:'A segurança da informação está diretamente relacionada com proteção \n\
        de um conjunto de informações, no sentido de preservar o valor que possuem para um \n\
        indivíduo ou uma organização. São propriedades básicas da segurança da informação: \n\
        confidencialidade, integridade, disponibilidade, autenticidade e legalidade.'
    },
    {
        titulo:'Checkout Transparente',  texto:'Aceite diversas bandeiras de cartões de crédito, débito e boleto.Integrado com PagSeguro para realizações de tranzações eletrônicas.Estabelecimentos que possuem experiência em e-commerce preferem o Checkout Transparente porque a experiência de compra é customizável e transparente.'},
    /*{
        titulo:'Melhor Envios', texto:'Integrado com Melhor Envios, tendo diversas formas de frete com os preços mais baixos.Cálculo remoto para cotação de fete automática.'},
     */
     
    {
        titulo:'Correios',texto:'Cálculo remoto para cotação de fete automática.'},
    {
        titulo:'Hospedagem', texto:'Além do domínio que é o seu endereço na internet, é necessário um local para guardar os arquivos que compõem seu site, loja virtual, sistemas web, banco de dados e aplicativos, com essa dupla seu site ficará online perfeitamente.'},
    {
        titulo:'Programador', texto:'Temos serviço de programador a sua disposição para criar novas ferramentas, atualizações, integrações e muito mais.'},
    {
        titulo:'Suporte Técnico via WhatsApp',texto:'Cansou de ser mal atendido em outras plataformas e Marketplaces?Aqui você não se preocupa com isso, pois nosso atendimento é via WhatsApp e em casos de emergêncialigamos para você. O que queremos é resolver seu problema o mais breve possivel!'},
    {
        titulo:'Segurança SSL',texto:'Não basta ter apenas um sistema web, loja virtual ou até mesmo um aplicativo, se não tiver tudo seguro.Com a '+aw+' que é mega focada nesse requisito, matemos tudo seguro para nossos clientes. Estamos sempre nos atualizando com todos os tipos de recursos e atualizações constantes.'},
    {
        titulo:'Registro no Google / Sites de busca',texto:'Vamos registrar nos sites de busca, sua loja virtual, site e aplicativo.Pra que seja encontrado com facilidade, é necessário fazer o registro dentro do índice de pesquisas de buscas.Usamos todas as ferramentas e tecnologias de SEO.'},
    {
        titulo:'Formas de Pagamento Manuais',texto:'Com as formas de pagamento manuais, você pode optar em PIX, TED, pagamento na retirada ou na entrega e em dinheiro.'},
    {
        titulo:'Formas de entregas',texto:'PAC, SDEX, Motoboy, Próprio e retire na loja.'}
];
var obj_mar6h = [
    {
        titulo:'Certificado de Segurança SSL', 
        texto:'Navegação segura com SSL Grátis para todas as suas páginas'
    },
    {
        titulo:'Instalador fácil de aplicações', 
        texto:'Crie seu site com WordPress, Joomla, Magento, PrestaShop e outras plataformas'
    },       
    {
        titulo:'Painel de controle cPanel',
        texto:'Para simplificar a gestão dos seus sites e contas de e-mail'
    },
    {
        titulo:'Contas de e-mail profissional',
        texto:'Crie e-mails profissionais e aumente sua reputação com seus visitantes'
    },
    {
        titulo:'Acesso SSH',
        texto:'Atualize suas Aplicações via SSH e Git'
    },
    {
        titulo:'Atendimento especializado',
        texto:'Suporte de alto nível, em português e resposta imediata'
    }
    
];
var obj_mar3 = [
    {
        titulo:'Atrair', 
        texto:'Quero atrair mais consumidores para o meu negócio', 
        textxl:'A venda é o início de um relacionamento, mas para ela acontecer demanda: pesquisa, planejamento, estratégia e muita persistência. Compreender a jornada de compra do consumidor e onde ele se encontra no funil de vendas é essencial para a construção da estratégia. Através de ferramentas de marketing, geração de conteúdo de valor, campanhas de mídia, definição das métricas de sucesso e o acompanhamento de digital analytics, nós aumentaremos as suas vendas.',
        img:'marketing-magnet.svg'
    },
    {
        titulo:'Divulgar', 
        texto:'Quero divulgar melhor o meu negócio e tornar ele conhecido',
        textxl:'Por uma questão de sobrevivência, numa selva chamada Mercado, ou a sua empresa se torna conhecida, ou ela vai virar história. O primeiro passo é perguntar: quem é o seu público-alvo e onde ele está? Respondida esta pergunta, avançamos: como chamar a sua atenção e despertar seu interesse até que, ao final, a venda seja a última resposta para todas as perguntas.Através de estratégias e ferramentas de marketing, entrega de conteúdo de valor, campanhas de mídia, definição das métricas de sucesso e o acompanhamento dos resultados, nós melhoraremos a comunicação da sua empresa gerando mais oportunidades para o seu negócio.',
        img:'marketing-specialists.svg'},
    {
        titulo:'SEO', 
        texto:'Quero aparecer na primeira posição do Google', 
        textxl:'Todos os nossos serviços de Loja virtual, aplicativos e Websites possuem:\n\
        O SEO (Search Engine Optimization) \n\
        consiste em uma estratégia de otimização de sites, \n\
        que tem como objetivo melhorar a visibilidade e o posicionamento \n\
        de um site dentro dos mecanismos de busca em resultados orgânicos, \n\
        como o Google, por meio das palavras-chave mais relevantes para o seu negócio, \n\
        produto ou serviço.',
        img:'seo-search-engine-optimization.svg'},
    {
        titulo:'Visitas', 
        texto:'Quero aumentar as visitas e gerar leads', 
        textxl:'Já imaginou que o primeiro contato que o consumidor vai ter com seu negócio poderá ser através do seu site? De arrepiar, não é?! Seu website deve ser uma plataforma de negócios, uma ferramenta de relacionamento, onde você precisa vender a ideia da compra e manter o contato com o seu lead. Porém, para tornar isto realidade é necessário: pesquisa, planejamento, estratégias e a definição das melhores tecnologias de marketing digital. Através do marketing de conteúdo, campanhas de mídia, otimizações de SEO e acompanhamento de digital analytics, nós aumentaremos a encontrabilidade do seu site e a geração de leads.',
        img:'local-seo-market.svg'
    }
];
var arrayPrecos = [
    '<hr></hr>',
    'Consultoria de sucesso<br>para seu E-commerce',    
    'Renovação de domínio',
    'Hospedagem',
    'Cadastro no Google',
    'Visitas Ilimitado',
    'Backup dos dados',
    'Segurança dos dados',
    'Certificado SSL',
    'Zero Cobrança por pedido',
    'Vendas no Varejo B2C',
    'Vendas no Atacado B2B',
    'Atacado e Varejo na mesma Loja',    
    'Ilimitado Número de Usuários para Gerir a Loja',
    'Recursos de SEO',
    'Newsletter',
    'Banners na Loja',
    'Contador de visitas na Loja',
    'Cupom de Desconto',
    'Avaliações da Loja',
    'Avaliações de Produtos',
    //'Programa de Fidelidade',
    'Relatórios',
    'Simulador de Frete',
    'Crie suas Políticas',
    'Controle de estoque',
    'E-mail Marketing',
    'Categorias',
    'Sub Categorias',
    'Marcas ou TERMINOLOGIA',
    'Pixel do Facebook',
    'Pixel do Google',
    'Botão WhatsApp',
    'Chat Messenger Facebook',
    'Programador a disposisção',
    'Suporte técnico via WhatsApp',
    'sitemap já configurado',
    'robots já configurado',
    'htaccess já configurado',
    'Google Analytics',
    'Meios de Pagamento&colon;',
    '&period;Pagseguro - Boleto',
    '&period;Pagseguro - Cartão de Crédito',
    '&period;Pagseguro - Cartão de Débito',
    '&period;Manual - PIX',
    '&period;Manual - Depósito Bancário',
    '&period;Manual - Na entrega',
    'Meios de Entrega&colon;',
    '&period;Correios PAC',
    '&period;Correios Sedex',
    '&period;Motoboy',
    '&period;Entrega própria',
    //'&period;Integração com Melhor Envio',
    '&period;Retire na Loja'
    
];
function mountTagP(arrayPrecos){
    var mountP = '';
    for (var l = 0; l < arrayPrecos.length; l++) {
        mountP += '<p>'+arrayPrecos[l]+'</p>';
    }
    return mountP;
}

var obj_mar10 = [
    {
        titulo:'Bronze', 
        texto:'<p><b><i>R$ 79,90 mensais</i></b></p>\n\
        <hr></hr><b><p>Para até 200 produtos</p>\n\
        <p>1x conta de <br>e-mail profissional</p>\n\
        <p>Aplicativo Android da Loja: Não</p>\n\
        <p>Aplicativo Ios da Loja: Não</p>\n\
        <p>Layout da Loja: Padrão e Pronto para uso</p></b>' 
        +mountTagP(arrayPrecos),
        textxl:'',
        img:'bronze.svg'
    },
    {
        titulo:'Prata', 
        texto:'<p><b><i>R$ 199,90 mensais</i></b></p>\n\
        <hr></hr><b><p>Para até 500 produtos</p>\n\
        <p>5x contas de <br>e-mail profissional</p>\n\
        <p>Aplicativo Android da Loja: Não</p>\n\
        <p>Aplicativo Ios da Loja: Não</p>\n\
        <p>Layout da Loja: Padrão e Pronto para uso</p></b>'
        +mountTagP(arrayPrecos),
        textxl:'',
        img:'prata.svg'},
    {
        titulo:'Ouro', 
        texto:'<p><b><i>R$ 599,90</i></b></p>\n\
        <hr></hr><b><p>Para até 1500 produtos</p>\n\
        <p>10x contas de <br>e-mail profissional</p>\n\
        <p>Aplicativo Android da Loja: SIM</p>\n\
        <p>Aplicativo Ios da Loja: Não</p>\n\
        <p>Layout da Loja: Vamos Criar para você</p></b>'  
        +mountTagP(arrayPrecos),
        textxl:'',
        img:'ouro.svg'},
    {
        titulo:'Rei', 
        texto:'<p><b><i>on demand</i></b></p>\n\
        <hr></hr><b><p>Para até <i>"Consulte sobre"</i> produtos</p>\n\
        <p><i>"Consulte sobre"</i> conta de <br>e-mail profissional</p>\n\
        <p>Aplicativo Android da Loja: SIM</p>\n\
        <p>Aplicativo Ios da Loja: SIM</p>\n\
        <p>Layout da Loja: Vamos Criar para você</p></b>'  
        +mountTagP(arrayPrecos), 
        textxl:'',
        img:'rei.svg'
    }
];
//******************END VARIAVEIS*************************************
//*******************BEGIN CHAMANDO FUNCTIONS***************************
lista(array_nav);
if(mark_4A || mark_4B){executa_marketing_4(obj_mar4);}
if(mark_6A || mark_6B){executa_marketing_6(obj_mar6);}
if(mark_6Ah || mark_6Bh){executa_marketing_6(obj_mar6h);}
if(mark_3){executa_marketing_3(obj_mar3);}
if(mark_3){executa_marketing_3(obj_mar10, true);}
if(mark_8A || mark_8B){executa_marketing_8(obj_mar3);}
if(btform){ddd();btform.addEventListener('click', save_frm);}
if(btformc){
    ddd();
    estado();
    btformcep.addEventListener('click', get_cep);
    btformc.addEventListener('click', save_cliente);
}
if(btbutton_addon2){btbutton_addon2.addEventListener('click', save_novidades);}
if(mais_ecommerce){set_attribute('name', mais_ecommerce,'href', whmcs_hospedagem);}
if(mais_website){set_attribute('name', mais_website,'href', whmcs_hospedagem);}
if(mais_marketing){set_attribute('name', mais_marketing,'href', index_pag+marketing);}
if(mais_aplicativo){set_attribute('name', mais_aplicativo,'href', index_pag+aplicativos);}
if(mais_awecommerce){set_attribute('name', mais_awecommerce,'href', index_pag+awecommerce);}
if(logo_link){
    set_attribute('name', logo_link,'href', index_pag+index);
    set_attribute('name', logo_link,'title', aw);
}

//*******************END CHAMANDO FUNCTIONS***************************
//*******************BEGIN NAVEGAÇÃO************************************
function lista(array_nav){
    var menunav = '';
    for(var i = 0; i < array_nav.length; i++) {
        var jogodavelha;
        var urllink;
        if(array_nav[i] === ecommerce || array_nav[i] === aplicativos || array_nav[i] === website || array_nav[i] === awecommerce ){
            jogodavelha = 'Home#';
            urllink = index_pag+jogodavelha+array_nav[i];
        }else if(array_nav[i] === agora && array_nav[i] !== ''){
            jogodavelha = '#';
            urllink = jogodavelha+array_nav[i];
        }else if(array_nav[i] === acesso){
            jogodavelha = '';
            urllink = whmcs_login;
        }else if(array_nav[i] === registro){
            jogodavelha = '';
            urllink = whmcs_registro;
        }else if(array_nav[i] === planos){
            jogodavelha = '';
            urllink = whmcs_hospedagem;  
        }else if(array_nav[i] === contato){
            jogodavelha = '';
            urllink = whmcs_contato;  
        }else{
            jogodavelha = '';
            urllink = index_pag+jogodavelha+array_nav[i];
        }
        menunav += create_nav(urllink,array_nav[i]);
    }
    return nav_li.insertAdjacentHTML('afterbegin', menunav);
    //return nav_li.innerHTML = menunav;
}
function create_nav(href,nome){
    var btn;
    if(nome === agora && nome !== ''){btn = 'btn btn-primary';}else{btn = 'nav-link text-dark';}
    var navli = '';
    navli += '<li class="nav-item">';
    navli += '<a class="'+btn+'" href="'+href+'">'+nome+'</a>';
    navli += '</li>';
    return navli;
}
//*******************END NAVEGAÇÃO************************************
//*************BEGIN PESQUISA*******************************************
if(rdflexRadioDefault1 && rdflexRadioDefault2){
    window.addEventListener('load', vende_sim_nao);
    rdflexRadioDefault1.addEventListener('click', vende_sim_nao);
    rdflexRadioDefault2.addEventListener('click', vende_sim_nao);
    function vende_sim_nao(){
        var resposta;
        if(rdflexRadioDefault1.checked === true){
            sim.style.display = 'block';        
        }else if(rdflexRadioDefault2.checked === true){
            sim.style.display = 'none'; 
            resposta = rdflexRadioDefault2.value;
        }
        if(resposta){porque.innerHTML = resposta+'. ';}
    }
    rdflexRadioDefault1asim.addEventListener('click',satisfeito_sim_nao);
    rdflexRadioDefault2bsim.addEventListener('click',satisfeito_sim_nao);
    function satisfeito_sim_nao(){
        var resposta;
        if(rdflexRadioDefault1asim.checked === true){
            resposta = rdflexRadioDefault1asim.value;
        }else if(rdflexRadioDefault2bsim.checked === true){
            resposta = rdflexRadioDefault2bsim.value;
        }
        porque.innerHTML = resposta+'. ';
    }
}
//*************END PESQUISA*******************************************
//*************BEGIN HOME MAIS INFORMAÇÕES****************************
function set_attribute(type, element,atribute, value){
    if(type === 'name'){
        for(var i = 0; i < element.length; i++) {
            element[i].setAttribute(atribute,value);
        }        
    }else if(type === 'id'){
        element.setAttribute(atribute,value);
    }
}
//*************END HOME MAIS INFORMAÇÕES****************************
//*************BEGIN MARKETING 4 AND CAROUSEL 2*********************
function executa_marketing_4(obj_mar){
    var stringA = '';
    var stringB = '';
    for (var i = 0; i < obj_mar.length; i++) {
        stringA += '<hr class="featurette-divider">';
        var active;if(obj_mar[i] === obj_mar[0]){active = 'active';}else{active = '';}
        stringB +='<div class="carousel-item '+active+' bg-white-smoke"><div class="container marketing">';
        stringA += create_marketing_4(obj_mar[i].titulo, img_dir+obj_mar[i].img);
        stringB += create_marketing_4(obj_mar[i].titulo, img_dir+obj_mar[i].img);
        stringB += '</div></div>';
    }
    mark_4A.innerHTML = stringA;
    mark_4B.innerHTML = stringB;    
}
function executa_marketing_6(obj_mar){
    var par = '';
    var impar = '';
    for (var i = 0; i < obj_mar.length; i = i+2) {
        par   += create_marketing_6(obj_mar[i].titulo, obj_mar[i].texto);        
    }
    for (var j = 1; j < obj_mar.length; j = j+2) {        
        impar += create_marketing_6(obj_mar[j].titulo, obj_mar[j].texto);
    }
    if(mark_6A && mark_6B){
        mark_6A.innerHTML = par;
        mark_6B.innerHTML = impar; 
    }else if(mark_6Ah && mark_6Bh){
        mark_6Ah.innerHTML = par;
        mark_6Bh.innerHTML = impar; 
    }
}
function create_marketing_4(titulo, img){
    var string = '';
    string += '<div class="row featurette" >';
        string += '<div class="col-md-7">';
            string += '<h2 class="featurette-heading">';
                string += titulo;
                string += '<br>';
                string += '<span class="text-muted"></span>';
            string += '</h2>';
            string += '<p class="lead">';                        
            string += '</p>';
            //string += '<p class="lead"><a class="btn btn-primary" href="#Agora">Entre em contato Agora!</a></p>';   
        string += '</div>';
        string += '<div class="col-md-5">';
            string += '<img class="featurette-image img-fluid mx-auto shadow-lg"'; 
                 string += 'src="'+img+'" alt="'+titulo+'" width="330" height="200">';
        string += '</div>';
    string += '</div>';
    return string;
}
function create_marketing_6(titulo, texto){
    var string = '';
    string += ' <!--<img src="img/E-commerce-cartoon-illustration-vector.jpg" width="56" height="56" alt="Gulp" class="mr-3">-->';
    string += '<div class="media mb-4 pb-3">';                    
                string += '<div class="media-body pl-1">';
                    string += '<h3 class="mb-1 font-size-lg">'+titulo+'</h3>';
                    string += '<p class="mb-0 font-size-sm text-muted">';
                        string += texto;
                    string += '</p>';
                string += '</div>';
    string += '</div>';
    return string;
}
//*************BEGIN MARKETING 4 AND CAROUSEL 2*********************
//************BEGIN MARKETING 3 ALBUN IMAGENS***********************
function executa_marketing_3(obj_mar, href){
    var string = '';    
    for (var i = 0; i < obj_mar.length; i++) {       
        string += create_marketing_3(obj_mar[i].titulo,obj_mar[i].texto, img_dir+obj_mar[i].img, href);        
    }
    if(string === ''){
        string = '';
        var ti, te, im;
        Object.keys(obj_mar).forEach(function(i){
            if(i === 'titulo'){
                ti = obj_mar[i];
            }else if(i === 'texto'){
                te = obj_mar[i];
            }else if(i === 'img'){
                im = obj_mar[i];
            }            
        });
        string += create_marketing_3(ti,te, dir_img+im, href);         
    }
    if(mark_3){
        mark_3.innerHTML = string;
    }else if(mark_9B){
       var juntar = mark_9B.innerHTML;
       juntar = juntar+string;
       mark_9B.innerHTML = juntar;        
    }      
}
function create_marketing_3(titulo, texto, img, href){
    if(!href){
        href = '#'+titulo;
        btn = 'Ver';
    }else{
        href = 'index.php?pag=Contato&Produto='+titulo;
        btn = 'Quero esse';
    }    
    var dimen = 'width="300" height="200"';
    var string = '';
    string += '<div class="col-md-3">';
        string += '<div class="card mb-4 shadow-sm">';
            string += '<img class="card-img-top" src="'+img+'" alt="'+titulo+'" '+dimen+'>';
            string += '<div class="card-body">';
                string += '<h3>'+titulo+'</h3>';
                if(href){
                    //string += '<div class="d-flex justify-content-between align-items-center">';
                        //string += '<div class="btn-group">';
                            //string += '<a href="'+href+'" class="btn btn-primary">'+btn+'</a>';                        
                        //string += '</div>';                    
                    //string += '</div>';
                }
                string += '<p class="card-text">';
                    string += texto;
                string += '</p>';
                if(href){
                    //string += '<div class="d-flex justify-content-between align-items-center">';
                        //string += '<div class="btn-group">';
                            //string += '<a href="'+href+'" class="btn btn-secondary">'+btn+'</a>';                        
                        //string += '</div>';                    
                    //string += '</div>';
                }
            string += '</div>';
        string += '</div>';
    string += '</div>';        
    return string;
}
function executa_marketing_8(obj_mar){
    var stringPar = '';  
    var stringImp = '';  
    for (var i = 0; i < obj_mar.length; i=i+2) {       
        stringPar += create_marketing_8(obj_mar[i].titulo,obj_mar[i].textxl, img_dir+obj_mar[i].img, '');        
    }  
    for (var i = 1; i < obj_mar.length; i = i=i+2) {       
        stringImp += create_marketing_8(obj_mar[i].titulo,obj_mar[i].textxl, img_dir+obj_mar[i].img, 'order-md-2');        
    }  
    mark_8A.innerHTML = stringPar;    
    mark_8B.innerHTML = stringImp;    
}
function create_marketing_8(titulo, texto, img, order){
    //var order = 'order-md-2';
    var string = '';
    string += '<hr class="featurette-divider" id="'+titulo+'">';    
    string += '<div class="row featurette" >';
        string += '<div class="col-md-7 '+order+'">';
            string += '<h2 class="featurette-heading">';
                string += titulo;
                string += '<br>';
                string += '<span class="text-muted"></span>';
            string += '</h2>';
            string += '<p class="lead">';
                string += texto;
            string += '</p>';
             //string += '<p class="lead"><a class="btn btn-primary" href="#Agora">Entre em contato Agora!</a></p>';            
        string += '</div>';
        string += '<div class="col-md-5 order-md-1">';
            string += '<img class="featurette-image img-fluid mx-auto shadow-lg" src="'+img+'" ';
                string += 'alt="'+titulo+'" width="451" height="301">';
        string += '</div>';
    string += '</div> ';   
    return string;
}
//************END MARKETING 3 ALBUN IMAGENS***********************


function save_novidades(){
    var mensagem, titulo, testa;
    var dados = '';
    for (var i = 0; i < txtemail.length; i++) {
        var testa = valida_vazio(txtemail[i].value)
        if(testa === true){
            txtemail[i].classList.remove('is-invalid');
            txtemail[i].classList.add('is-valid');
            dados += aspas(replace_salve_email(txtemail[i].value));
        }else if(testa === false){
            txtemail[i].classList.remove('is-valid');
            txtemail[i].classList.add('is-invalid');
            mensagem = 'Verifique os campos destacados em Vermelho';
            return_modal_comunica(txtemail[i].dataset.news, mensagem, mensagem, 'Verifique os campos');
            return false;
        }
    }
    
    var insert = insert_bd(dados, 'news_letter', 'EMAIL_NEW,', 'SiteAW', '');        
    if(insert === true){
        for (var i = 0; i < txtemail.length; i++) {
                txtemail[i].value = '';        
        }
        titulo = 'Obrigado';
        mensagem = 'Em breve entraremos em contato';
    }else if(insert === false){
        titulo = 'Aviso';
        mensagem = 'Verifique seus Campos';
    }
    return_modal_comunica(insert, mensagem, mensagem, titulo);
}
function get_cep(){
    cep_frm_cliente();
}
function save_cliente(){
    exec_fetch_crud(frm_cliente);
}
function save_frm(){
    var mensagem, titulo, testa;
        var array_testa = [];
        var inputs = new Object();
        var obj = new Object();    
        for (var i = 0; i < campos.length; i++) {
            testa = '';
            if(campos[i].dataset.geral === 'ddd'){
                testa = valida_select(campos[i].value);
                array_testa.push(testa);
                inputs[campos[i].dataset.geral] = testa;
            }else if(campos[i].dataset.geral === 'url'){
                if(rdflexRadioDefault[0].checked === true){
                    testa = valida_select(campos[i].value);
                    array_testa.push(testa);
                    inputs[campos[i].dataset.geral] = testa;
                }
            }else{
                testa = valida_vazio(campos[i].value);
                array_testa.push(testa);
                inputs[campos[i].dataset.geral] = testa;
            }        
            
            if(testa === false){
                campos[i].classList.remove('is-valid');
                campos[i].classList.add('is-invalid');
            }else{
                campos[i].classList.remove('is-invalid');
                campos[i].classList.add('is-valid');
                obj[campos[i].dataset.geral] = campos[i].value;
            }
        }
        if(rdflexRadioDefault.length){
            var indice, valor;
            for (var i = 0; i < rdflexRadioDefault.length; i++) {                 
                if(rdflexRadioDefault[i].checked === true){
                    indice = rdflexRadioDefault[i].dataset.geral;
                    valor = rdflexRadioDefault[i].value;
                }else{
                    indice = rdflexRadioDefault[i].dataset.geral;
                }                
            }
            if(indice && valor){
                obj[indice] = valor;
                testa = true;
                inputs[indice] = testa;
                array_testa.push(testa);
            }else{
                testa = false;
                inputs[indice] = testa;
                array_testa.push(testa);
            }
            
        }
        if(rdflexRadioDefault.length){
            if(rdflexRadioDefault_sim && rdflexRadioDefault[0].checked === true){
                var indice, valor;
                for (var i = 0; i < rdflexRadioDefault_sim.length; i++) {                
                    if(rdflexRadioDefault_sim[i].checked === true){
                        indice = rdflexRadioDefault_sim[i].dataset.geral;
                        valor = rdflexRadioDefault_sim[i].value;
                    }else{
                        indice = rdflexRadioDefault_sim[i].dataset.geral;
                    }                    
                }
                if(valor){
                    obj[indice] = valor;
                    testa = true;
                    inputs[indice] = testa;
                    array_testa.push(testa);
                }else{
                    testa = false;
                    inputs[indice] = testa;
                    array_testa.push(testa);
                }            
            }
        }
        for (var i = 0; i < array_testa.length; i++) {
            if(array_testa[i] === false){
                mensagem = 'Verifique os campos destacados em Vermelho';
                return_modal_comunica(array_testa[i], mensagem, mensagem, 'Verifique os campos');
                return false;
            }
        }
        var json = aspas(JSON.stringify(obj));         
        var insert = insert_bd(json, 'news_letter', 'GERAL_NEW,', 'SiteAW', '');        
        if(insert === true){
            for (var i = 0; i < campos.length; i++) {
                form[0].reset();        
            }
            titulo = 'Obrigado';
            mensagem = 'Em breve entraremos em contato';
        }else if(insert === false){
            titulo = 'Aviso';
            mensagem = 'Verifique seus Campos';
        }
        return_modal_comunica(insert, mensagem, mensagem, titulo);
}
contador();
function contador(){
    var pag; var id; var type;      
    var urlAW = window.location.href.toString(); //console.log(index);
    if(urlAW.indexOf('%2F')){urlAW = urlAW.replace(/%2F/g, '/');}
    var array = array_nav;//['Home','Contato','Pesquisa','E-commerce','Marketing','Aplicativos','teste','Hospedagem'];
    for (var i = 0; i < array.length; i++) {
        if(urlAW.indexOf('pag=') >= 0 && urlAW.indexOf(array[i]) >= 0){
            type = array[i];            
        }
    }
    if(!type){
        type  = 'index';
    }
    pag = '';
    id = '';
    if(typeof control_visita === 'function'){
        control_visita(pag, id, type);
    }
}


ajax_fetch_select('produtos', 'produtos', '*', 'FK_EMPRESA','  AND EXCLUIDO = 0 AND STATUSPROD = "Ativo" ');
function ajax_fetch_select(name_table,table_bd,table_filtro,FK_EMPRESA,clasula){ 
    var obj = {
        name_table: name_table,
        table_bd: table_bd,
        table_filtro:table_filtro,
        FK_EMPRESA:FK_EMPRESA,
        format:'json',
        clasula:clasula,
        path_cadastrar:'',
        path_alterar:'',
        path_exluir:''
    }
       
    var myHeaders = new Headers();                          
    myHeaders.append('Content-Type', "application/json");
    var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify(obj),
          redirect: 'follow'
        };
    fetch(select_php, requestOptions)
    .then(response => response.json()) 
    .then(function(data){        
        obj_produto(data);        
    })    
    .catch(function(data){ 
        creat_file_sender('erro_mysql-ajax_select()', 'txt',JSON.stringify(data)+' --- localização: '+name_table);
        sender_email(email_suporte,dominio,JSON.stringify(data),'');
    })  
}
function obj_produto(obj){    
    for (var i = 0; i < obj.length; i++) {        
        executa_marketing_3(cabecalho(obj[i].NOMEPROD,obj[i].FK_EMPRESA+'/'+obj[i].CODPROD+'/'+obj[i].IMG01, obj[i].VALORBRUTO, obj[i].ESPEC), true);        
    }    
}
function cabecalho(titulo,img, preco, espec ){    
    var obj_mar = {
        titulo:titulo, 
        texto:'<p><b><i>R$ '+preco+' mensais</i></b></p>\n\
        <hr></hr>' 
        +mountTagPobj(espec),        
        img:img
    };     
    return obj_mar;
}
function mountTagPobj(obj){
    var mountP = '';
    if(obj !== ''){
        obj = JSON.parse(obj);        
        for (var i = 0; i < obj.length; i++) { 
            if(obj[i].nome !== ''){
                if(obj[i].especifica){
                    mountP += '<p>'+obj[i].nome+' : '+obj[i].especifica+'</p>'; 
                }else{
                    mountP += '<p>'+obj[i].nome+'</p>'; 
                }                               
            }
        }       
    }
    return mountP;
}

