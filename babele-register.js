Hooks.on('init', () => {

    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: '13thagept-br',
            lang: 'pt-BR',
            dir: 'compendium'
        });
    }
});
