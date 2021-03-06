Aria.tplScriptDefinition({
    $classpath : "samples.widgets.multiautocomplete.rangevalues.MultiAutoCompleteScript",
    $dependencies : ["samples.common.multiautocomplete.MultiAutoCompleteResourceHandler"],
    $prototype : {
        /**
         * Returns the resources using a common handler for all samples containing an MultiAutoComplete.
         * @returns the instanced of range resources handler
         */
        getLCRangeHandler : function () {
            var multiautoCompleteResourceHandler = samples.common.multiautocomplete.MultiAutoCompleteResourceHandler;
            return multiautoCompleteResourceHandler.getLCRangeResourceHandlerRangeValues();
        }
    }
});
