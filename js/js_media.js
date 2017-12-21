                function change_onglet(name) {
                    document.getElementById('onglet_' + anc_onglet).className = 'onglet_0 onglet';
                    document.getElementById('onglet_' + name).className = 'onglet_1 onglet';
                    document.getElementById('contenu_onglet_' + anc_onglet).style.display = 'none';
                    document.getElementById('contenu_onglet_' + name).style.display = 'block';
                    anc_onglet = name;
                }

                var anc_onglet = 'ajout';
                change_onglet(anc_onglet);

                function change_onglets(name) {
                    document.getElementById('onglets_' + anc_onglets).className = 'onglets_0 onglets';
                    document.getElementById('onglets_' + name).className = 'onglets_1 onglets';
                    document.getElementById('contenu_onglets_' + anc_onglets).style.display = 'none';
                    document.getElementById('contenu_onglets_' + name).style.display = 'block';
                    anc_onglets = name;
                }

                var anc_onglets = 'video';
                change_onglets(anc_onglets);


$(document).ready(function () {
    $('.onglet').click(function(){
        //
    });
}