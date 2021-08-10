<?php $local = isset($_GET['pag']) ? $_GET['pag'] : 'index'; ?>
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <?php $_POST['local'] = $local; 
            include_once './templates/functions.php';
            include_once './templates/head_1.php'; 
        ?> 
        <script src="//code.jivosite.com/widget/SYnVYXF1nU" async></script>
    </head>
    <body id="topo" class="bg-white-smoke">
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WN3JTMJ"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->        
            <?php include './templates/nav_1.php';?>         
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <?php 
                    if($local === 'index' || !isset($local) || $local === 'Home'){               
                        include_once './templates/marketing_2.php'; 
                    }?>
                    <section class="post-content">
                        <div class="container">
                            <main id="main" class="site-main">
                                <?php
                                if($local === 'dominio'){               
                                    include_once './templates/dominio.php'; 
                                } 
                                if($local === 'hospedagem'){               
                                    include_once './templates/hospedagem.php'; 
                                } 
                                if($local === 'tipo-de-hospedagem'){               
                                    include_once './templates/tipo-de-hospedagem.php'; 
                                } 
                                ?> 
                            </main>
                        </div>
                    </section>
                </div> 
                <div class="col-md-4">
                    <div class="position-sticky m-2" style="top: 2rem;">
                        <?php include_once './templates/planos.php';?>
                    </div>
                </div>
            </div> 
        </div>
        <?php include_once './templates/footer_1.php'; ?>        
        <?php include_once './templates/footer_scripts_1.php'; ?>
        
    </body>
</html>
