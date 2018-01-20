$(function() {
    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "Erlang",
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang"
    ];
    $( "#mainSearch" ).autocomplete({
        source: availableTags,
        minLength:0
    }).bind('focus', function(){
        if(this.value.length === 0)
            $(this).autocomplete("search");
    }).autocomplete( "widget" ).addClass( "main-search-dropdown" );
});