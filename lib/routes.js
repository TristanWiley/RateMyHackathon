FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render("mainLayout", { content: "home" });
    }
});

FlowRouter.route('/register', {
    action: function() {
        BlazeLayout.render("mainLayout", { content: "register" });
    }
});