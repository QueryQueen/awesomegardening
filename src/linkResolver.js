linkResolver = function(ctx, doc, isBroken) {
    if (isBroken) return '#broken';
    if (doc.type == 'blogpost')
        return "/blog/" + doc.id; //+ "/" + doc.slug + (ctx.maybeRef ? '?ref=' + ctx.maybeRef : '');
};