$('.sidebar')
    .sidebar({
        transition       : 'overlay',
        mobileTransition : 'uncover'
    })
    .sidebar('attach events', '.launch.button, .view-ui, .launch.item, p')
    .sidebar('toggle')