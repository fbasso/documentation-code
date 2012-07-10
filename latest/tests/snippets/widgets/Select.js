Aria.classDefinition({
    $classpath: "tests.snippets.widgets.Select",
    $extends: "aria.jsunit.TestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            document.getElementById("TESTAREA").style.display="none";
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.widgets.select.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});