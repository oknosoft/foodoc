var glob = ('undefined' === typeof window) ? global : window,

Handlebars = glob.Handlebars || require('handlebars');

this["tmpl"] = this["tmpl"] || {};

Handlebars.registerPartial("search/modal", this["tmpl"]["search/modal"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!-- start:lunr-search-modal.hbs -->\n<div class=\"modal fade\" id=\"lunr-search-modal\">\n	<div class=\"modal-dialog\">\n		<div class=\"modal-content\">\n			<div class=\"modal-header\">\n				<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n				<h4 class=\"modal-title\">Результаты поиска</h4>\n			</div>\n			<div class=\"modal-body\" id=\"lunr-search-body\">\n			</div>\n			<div class=\"modal-footer\" id=\"lunr-search-footer\">\n				<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Закрыть</button>\n			</div>\n		</div><!-- /.modal-content -->\n	</div><!-- /.modal-dialog -->\n</div>\n<!-- end:lunr-search-modal.hbs -->";
},"useData":true}));

Handlebars.registerPartial("search/navbar-input", this["tmpl"]["search/navbar-input"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!-- start:lunr-search-navbar.hbs -->\n<form class=\"navbar-form navbar-right\" role=\"search\">\n	<div class=\"input-group\">\n		<input type=\"text\" class=\"form-control\" placeholder=\"Найти...\" id=\"lunr-search-input\">\n		<div class=\"input-group-btn\">\n			<button class=\"btn btn-default\" id=\"lunr-search-submit\">\n				<i class=\"glyphicon glyphicon-search\"></i>\n			</button>\n		</div>\n	</div>\n</form>\n<!-- start:lunr-search-navbar.hbs -->";
},"useData":true}));

Handlebars.registerPartial("site/layout", this["tmpl"]["site/layout"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<title>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"pageTitle") : stack1), depth0))
    + "</title>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"favicon") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":2},"end":{"line":10,"column":9}}})) != null ? stack1 : "")
    + "		<!--[if lt IE 9]>\n		<script src=\"//html5shiv.googlecode.com/svn/trunk/html5.js\"></script>\n		<![endif]-->\n		<link href=\"https://fonts.googleapis.com/css?family=PT+Mono\" rel=\"stylesheet\">\n		<link type=\"text/css\" rel=\"stylesheet\" href=\"css/bootstrap.min.css\">\n		<link type=\"text/css\" rel=\"stylesheet\" href=\"css/prism.min.css\">\n		<link type=\"text/css\" rel=\"stylesheet\" href=\"css/template.min.css\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"stylesheets") : stack1),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":2},"end":{"line":20,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"systemColor") : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":2},"end":{"line":50,"column":9}}})) != null ? stack1 : "")
    + "		<script type=\"text/javascript\">\n			window.TEMPLATE_OPTIONS = "
    + ((stack1 = (lookupProperty(helpers,"json")||(depth0 && lookupProperty(depth0,"json"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"options") : depth0),{"name":"json","hash":{},"data":data,"loc":{"start":{"line":52,"column":29},"end":{"line":52,"column":47}}})) != null ? stack1 : "")
    + ";\n			window.DOCLET_TOC_ENABLED = "
    + ((stack1 = (lookupProperty(helpers,"json")||(depth0 && lookupProperty(depth0,"json"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"showTableOfContents") : stack1),{"name":"json","hash":{},"data":data,"loc":{"start":{"line":53,"column":31},"end":{"line":53,"column":68}}})) != null ? stack1 : "")
    + ";\n			window.DOCLET_AFILTER_ENABLED = "
    + ((stack1 = (lookupProperty(helpers,"json")||(depth0 && lookupProperty(depth0,"json"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"showAccessFilter") : stack1),{"name":"json","hash":{},"data":data,"loc":{"start":{"line":54,"column":35},"end":{"line":54,"column":69}}})) != null ? stack1 : "")
    + ";\n		</script>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<link rel=\"icon\" type=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"config") : depth0)) != null ? lookupProperty(stack1,"faviconType") : stack1), depth0))
    + "\" href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"favicon") : stack1), depth0))
    + "\"/>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "			<link type=\"text/css\" rel=\"stylesheet\" href=\""
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\">\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "			<style>\n				.page-header,\n				pre.code-toolbar > .toolbar:hover {\n					background-color: "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"systemColor") : stack1), depth0))
    + ";\n				}\n				.callout-primary,\n				.toc .nav > li > a:hover,\n				.toc .nav > li > a:focus,\n				.toc .nav > li.active > a,\n				.toc .nav > li.active > a:hover,\n				.toc .nav > li.active > a:focus,\n				pre.code-toolbar > .toolbar:hover {\n					border-left-color: "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"systemColor") : stack1), depth0))
    + ";\n				}\n				pre.code-toolbar > .toolbar:hover {\n					border-bottom-color: "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"systemColor") : stack1), depth0))
    + ";\n				}\n				.callout-primary h5,\n				.symbol-title.collapsible-symbol .toggle-icon,\n				.breadcrumb li a,\n				.toc .nav > li > a:hover,\n				.toc .nav > li > a:focus,\n				.toc .nav > li.active > a,\n				.toc .nav > li.active > a:hover,\n				.toc .nav > li.active > a:focus {\n					color: "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"systemColor") : stack1), depth0))
    + ";\n				}\n			</style>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<div class=\"page-header\">\n			<div class=\"container\">\n				<span class=\"kind\">"
    + container.escapeExpression(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"kind") : stack1), depth0))
    + "</span>\n				<h1>"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"pageTitleHTML") : stack1), depth0)) != null ? stack1 : "")
    + "</h1>\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"tag/summary"),(depth0 != null ? lookupProperty(depth0,"doclet") : depth0),{"name":"tag/summary","data":data,"indent":"\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "			</div>\n		</div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "col-md-9";
},"12":function(container,depth0,helpers,partials,data) {
    return "col-md-12";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"crumbs") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":73,"column":5},"end":{"line":79,"column":12}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"showAccessFilter") : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":80,"column":5},"end":{"line":107,"column":12}}})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						<ol class=\"breadcrumb\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"crumbs") : depth0),{"name":"each","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":75,"column":7},"end":{"line":77,"column":16}}})) != null ? stack1 : "")
    + "						</ol>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "							<li"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"last")),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":76,"column":10},"end":{"line":76,"column":45}}})) != null ? stack1 : "")
    + ">"
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "</li>\n";
},"17":function(container,depth0,helpers,partials,data) {
    return " class=\"active\"";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						<div class=\"access-filter\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"has") : stack1)) != null ? lookupProperty(stack1,"inherited") : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":82,"column":7},"end":{"line":87,"column":14}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"has") : stack1)) != null ? lookupProperty(stack1,"public") : stack1),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":88,"column":7},"end":{"line":93,"column":14}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"has") : stack1)) != null ? lookupProperty(stack1,"protected") : stack1),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":94,"column":7},"end":{"line":99,"column":14}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"has") : stack1)) != null ? lookupProperty(stack1,"private") : stack1),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":100,"column":7},"end":{"line":105,"column":14}}})) != null ? stack1 : "")
    + "						</div>\n";
},"20":function(container,depth0,helpers,partials,data) {
    return "								<label class=\"checkbox-inline\">\n									<input class=\"toggle-inherited\" type=\"checkbox\" value=\"\" checked>\n									Унаследованные\n								</label>\n";
},"22":function(container,depth0,helpers,partials,data) {
    return "								<label class=\"checkbox-inline\">\n									<input class=\"toggle-public\" type=\"checkbox\" value=\"\" checked>\n									Публичные\n								</label>\n";
},"24":function(container,depth0,helpers,partials,data) {
    return "								<label class=\"checkbox-inline\">\n									<input class=\"toggle-protected\" type=\"checkbox\" value=\"\" checked>\n									Защищенные\n								</label>\n";
},"26":function(container,depth0,helpers,partials,data) {
    return "								<label class=\"checkbox-inline\">\n									<input class=\"toggle-private\" type=\"checkbox\" value=\"\" checked>\n									Приватные\n								</label>\n";
},"28":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<section>\n"
    + ((stack1 = (lookupProperty(helpers,"block")||(depth0 && lookupProperty(depth0,"block"))||alias2).call(alias1,"primary",{"name":"block","hash":{},"fn":container.program(29, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":111,"column":6},"end":{"line":115,"column":16}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"block")||(depth0 && lookupProperty(depth0,"block"))||alias2).call(alias1,"secondary",{"name":"block","hash":{},"fn":container.program(31, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":116,"column":6},"end":{"line":222,"column":16}}})) != null ? stack1 : "")
    + "					</section>\n";
},"29":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "							<dl class=\"symbol primary\">\n								"
    + container.escapeExpression((lookupProperty(helpers,"symbol")||(depth0 && lookupProperty(depth0,"symbol"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"doclet") : depth0),{"name":"symbol","hash":{"options":(depth0 != null ? lookupProperty(depth0,"options") : depth0),"expanded":true,"primary":true},"data":data,"loc":{"start":{"line":113,"column":8},"end":{"line":113,"column":68}}}))
    + "\n							</dl>\n";
},"31":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "							<article class=\"secondary\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"symbols") : stack1)) != null ? lookupProperty(stack1,"module") : stack1),{"name":"if","hash":{},"fn":container.program(32, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":118,"column":8},"end":{"line":126,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"symbols") : stack1)) != null ? lookupProperty(stack1,"class") : stack1),{"name":"if","hash":{},"fn":container.program(35, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":127,"column":8},"end":{"line":135,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"symbols") : stack1)) != null ? lookupProperty(stack1,"mixin") : stack1),{"name":"if","hash":{},"fn":container.program(37, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":136,"column":8},"end":{"line":144,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"symbols") : stack1)) != null ? lookupProperty(stack1,"namespace") : stack1),{"name":"if","hash":{},"fn":container.program(39, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":145,"column":8},"end":{"line":153,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"symbols") : stack1)) != null ? lookupProperty(stack1,"member") : stack1),{"name":"if","hash":{},"fn":container.program(41, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":154,"column":8},"end":{"line":166,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"symbols") : stack1)) != null ? lookupProperty(stack1,"sysprop") : stack1),{"name":"if","hash":{},"fn":container.program(46, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":167,"column":32},"end":{"line":175,"column":39}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"symbols") : stack1)) != null ? lookupProperty(stack1,"tabular") : stack1),{"name":"if","hash":{},"fn":container.program(49, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":176,"column":32},"end":{"line":184,"column":39}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"symbols") : stack1)) != null ? lookupProperty(stack1,"function") : stack1),{"name":"if","hash":{},"fn":container.program(51, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":185,"column":8},"end":{"line":193,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"symbols") : stack1)) != null ? lookupProperty(stack1,"typedef") : stack1),{"name":"if","hash":{},"fn":container.program(53, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":194,"column":8},"end":{"line":202,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"symbols") : stack1)) != null ? lookupProperty(stack1,"event") : stack1),{"name":"if","hash":{},"fn":container.program(55, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":203,"column":8},"end":{"line":211,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"symbols") : stack1)) != null ? lookupProperty(stack1,"tutorial") : stack1),{"name":"if","hash":{},"fn":container.program(57, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":212,"column":8},"end":{"line":220,"column":15}}})) != null ? stack1 : "")
    + "							</article>\n";
},"32":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "									<h3>Модули</h3>\n									<dl class=\"symbol\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"symbols") : stack1)) != null ? lookupProperty(stack1,"module") : stack1),{"name":"each","hash":{},"fn":container.program(33, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":121,"column":10},"end":{"line":124,"column":19}}})) != null ? stack1 : "")
    + "									</dl>\n";
},"33":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "											<hr/>\n											"
    + container.escapeExpression((lookupProperty(helpers,"symbol")||(depth0 && lookupProperty(depth0,"symbol"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"symbol","hash":{"options":(depths[1] != null ? lookupProperty(depths[1],"options") : depths[1])},"data":data,"loc":{"start":{"line":123,"column":11},"end":{"line":123,"column":45}}}))
    + "\n";
},"35":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "									<h3>Классы</h3>\n									<dl class=\"symbol\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"symbols") : stack1)) != null ? lookupProperty(stack1,"class") : stack1),{"name":"each","hash":{},"fn":container.program(33, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":130,"column":10},"end":{"line":133,"column":19}}})) != null ? stack1 : "")
    + "									</dl>\n";
},"37":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "									<h3>Объединения</h3>\n									<dl class=\"symbol\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"symbols") : stack1)) != null ? lookupProperty(stack1,"mixin") : stack1),{"name":"each","hash":{},"fn":container.program(33, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":139,"column":10},"end":{"line":142,"column":19}}})) != null ? stack1 : "")
    + "									</dl>\n";
},"39":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "									<h3>Пространства имён</h3>\n									<dl class=\"symbol\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"symbols") : stack1)) != null ? lookupProperty(stack1,"namespace") : stack1),{"name":"each","hash":{},"fn":container.program(33, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":148,"column":10},"end":{"line":151,"column":19}}})) != null ? stack1 : "")
    + "									</dl>\n";
},"41":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"isDataObj") : stack1),{"name":"if","hash":{},"fn":container.program(42, data, 0, blockParams, depths),"inverse":container.program(44, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":155,"column":36},"end":{"line":159,"column":43}}})) != null ? stack1 : "")
    + "									<dl class=\"symbol\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"symbols") : stack1)) != null ? lookupProperty(stack1,"member") : stack1),{"name":"each","hash":{},"fn":container.program(33, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":161,"column":10},"end":{"line":164,"column":19}}})) != null ? stack1 : "")
    + "									</dl>\n";
},"42":function(container,depth0,helpers,partials,data) {
    return "                                        <h3>Реквизиты</h3>\n";
},"44":function(container,depth0,helpers,partials,data) {
    return "                                        <h3>Свойства</h3>\n";
},"46":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                    <h3>Стандартные реквизиты</h3>\n                                    <dl class=\"symbol\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"symbols") : stack1)) != null ? lookupProperty(stack1,"sysprop") : stack1),{"name":"each","hash":{},"fn":container.program(47, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":170,"column":40},"end":{"line":173,"column":49}}})) != null ? stack1 : "")
    + "                                    </dl>\n";
},"47":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                            <hr/>\n                                            "
    + container.escapeExpression((lookupProperty(helpers,"symbol")||(depth0 && lookupProperty(depth0,"symbol"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"symbol","hash":{"options":(depths[1] != null ? lookupProperty(depths[1],"options") : depths[1])},"data":data,"loc":{"start":{"line":172,"column":44},"end":{"line":172,"column":78}}}))
    + "\n";
},"49":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                    <h3>Табличные части</h3>\n                                    <dl class=\"symbol\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"symbols") : stack1)) != null ? lookupProperty(stack1,"tabular") : stack1),{"name":"each","hash":{},"fn":container.program(47, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":179,"column":40},"end":{"line":182,"column":49}}})) != null ? stack1 : "")
    + "                                    </dl>\n";
},"51":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "									<h3>Методы</h3>\n									<dl class=\"symbol\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"symbols") : stack1)) != null ? lookupProperty(stack1,"function") : stack1),{"name":"each","hash":{},"fn":container.program(33, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":188,"column":10},"end":{"line":191,"column":19}}})) != null ? stack1 : "")
    + "									</dl>\n";
},"53":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "									<h3>Определения типов</h3>\n									<dl class=\"symbol\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"symbols") : stack1)) != null ? lookupProperty(stack1,"typedef") : stack1),{"name":"each","hash":{},"fn":container.program(33, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":197,"column":10},"end":{"line":200,"column":19}}})) != null ? stack1 : "")
    + "									</dl>\n";
},"55":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "									<h3>События</h3>\n									<dl class=\"symbol\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"symbols") : stack1)) != null ? lookupProperty(stack1,"event") : stack1),{"name":"each","hash":{},"fn":container.program(33, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":206,"column":10},"end":{"line":209,"column":19}}})) != null ? stack1 : "")
    + "									</dl>\n";
},"57":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "									<h3>Руководства</h3>\n									<dl class=\"symbol\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"symbols") : stack1)) != null ? lookupProperty(stack1,"tutorial") : stack1),{"name":"each","hash":{},"fn":container.program(33, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":215,"column":10},"end":{"line":218,"column":19}}})) != null ? stack1 : "")
    + "									</dl>\n";
},"59":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"col-md-3 side-content\">\n                    <nav class=\"toc hidden-print hidden-sm hidden-xs\"></nav>\n                </div>\n";
},"61":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"footer") : stack1),{"name":"if","hash":{},"fn":container.program(62, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":235,"column":3},"end":{"line":237,"column":10}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"copyright") : stack1),{"name":"if","hash":{},"fn":container.program(64, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":238,"column":3},"end":{"line":240,"column":10}}})) != null ? stack1 : "")
    + "			<div class=\"generated-by\">Сгенерировано <a href=\"https://github.com/jsdoc3/jsdoc\">JSDoc "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"config") : depth0)) != null ? lookupProperty(stack1,"version") : stack1), depth0))
    + "</a>"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"includeDate") : stack1),{"name":"if","hash":{},"fn":container.program(66, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":241,"column":113},"end":{"line":241,"column":165}}})) != null ? stack1 : "")
    + " с использованием <a href=\"https://github.com/oknosoft/foodoc\">шаблона FooDoc</a>.</div>\n";
},"62":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<div class=\"footer-option\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"footer") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n";
},"64":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<div class=\"copyright\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"copyright") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n";
},"66":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " a "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"config") : depth0)) != null ? lookupProperty(stack1,"date") : stack1), depth0));
},"68":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<div>\n			<pre class=\"prettyprint source language-javascript\"><code class=\"language-javascript\">"
    + ((stack1 = (lookupProperty(helpers,"json")||(depth0 && lookupProperty(depth0,"json"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"config") : depth0),{"name":"json","hash":{"pretty":true},"data":data,"loc":{"start":{"line":246,"column":89},"end":{"line":246,"column":118}}})) != null ? stack1 : "")
    + "</code></pre>\n			<pre class=\"prettyprint source language-javascript\"><code class=\"language-javascript\">"
    + ((stack1 = (lookupProperty(helpers,"json")||(depth0 && lookupProperty(depth0,"json"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"doclet") : depth0),{"name":"json","hash":{"pretty":true},"data":data,"loc":{"start":{"line":247,"column":89},"end":{"line":247,"column":118}}})) != null ? stack1 : "")
    + "</code></pre>\n		</div>\n";
},"70":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"search/modal"),depth0,{"name":"search/modal","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "		<script src=\"js/lunr.min.js\"></script>\n";
},"72":function(container,depth0,helpers,partials,data) {
    return "		<script src=\""
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\"></script>\n";
},"74":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"analytics") : stack1)) != null ? lookupProperty(stack1,"ua") : stack1),{"name":"if","hash":{},"fn":container.program(75, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":262,"column":26},"end":{"line":271,"column":15}}})) != null ? stack1 : "");
},"75":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"analytics") : stack1)) != null ? lookupProperty(stack1,"domain") : stack1),{"name":"if","hash":{},"fn":container.program(76, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":262,"column":54},"end":{"line":271,"column":8}}})) != null ? stack1 : "");
},"76":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n		<script>\n			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n			})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n			ga('create', '"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"analytics") : stack1)) != null ? lookupProperty(stack1,"ua") : stack1), depth0))
    + "', '"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"analytics") : stack1)) != null ? lookupProperty(stack1,"domain") : stack1), depth0))
    + "');\n			ga('send', 'pageview');\n		</script>\n	";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n	<meta charset=\"utf-8\">\n	<meta name=\"viewport\" content=\"width=device-width\">\n"
    + ((stack1 = (lookupProperty(helpers,"block")||(depth0 && lookupProperty(depth0,"block"))||alias2).call(alias1,"head",{"name":"block","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":1},"end":{"line":56,"column":11}}})) != null ? stack1 : "")
    + "</head>\n<body>\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"site/navbar"),depth0,{"name":"site/navbar","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"block")||(depth0 && lookupProperty(depth0,"block"))||alias2).call(alias1,"page-header",{"name":"block","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":60,"column":1},"end":{"line":68,"column":11}}})) != null ? stack1 : "")
    + "	<div class=\"container content\">\n		<div class=\"row\">\n			<div class=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"showTableOfContents") : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.program(12, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":71,"column":15},"end":{"line":71,"column":81}}})) != null ? stack1 : "")
    + " main-content\">\n"
    + ((stack1 = (lookupProperty(helpers,"block")||(depth0 && lookupProperty(depth0,"block"))||alias2).call(alias1,"controls",{"name":"block","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":72,"column":4},"end":{"line":108,"column":14}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"block")||(depth0 && lookupProperty(depth0,"block"))||alias2).call(alias1,"content",{"name":"block","hash":{},"fn":container.program(28, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":109,"column":4},"end":{"line":224,"column":14}}})) != null ? stack1 : "")
    + "			</div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"showTableOfContents") : stack1),{"name":"if","hash":{},"fn":container.program(59, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":226,"column":12},"end":{"line":230,"column":19}}})) != null ? stack1 : "")
    + "		</div>\n	</div>\n	<footer>\n"
    + ((stack1 = (lookupProperty(helpers,"block")||(depth0 && lookupProperty(depth0,"block"))||alias2).call(alias1,"footer",{"name":"block","hash":{},"fn":container.program(61, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":234,"column":2},"end":{"line":242,"column":12}}})) != null ? stack1 : "")
    + "	</footer>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"config") : depth0)) != null ? lookupProperty(stack1,"debug") : stack1),{"name":"if","hash":{},"fn":container.program(68, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":244,"column":1},"end":{"line":249,"column":8}}})) != null ? stack1 : "")
    + "	<script src=\"js/jquery.min.js\"></script>\n	<script src=\"js/bootstrap.min.js\"></script>\n	<script src=\"js/clipboard.min.js\"></script>\n	<script src=\"js/prism.min.js\"></script>\n	<script src=\"js/template.min.js\"></script>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"search") : stack1),{"name":"if","hash":{},"fn":container.program(70, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":255,"column":1},"end":{"line":258,"column":8}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"scripts") : stack1),{"name":"each","hash":{},"fn":container.program(72, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":259,"column":1},"end":{"line":261,"column":10}}})) != null ? stack1 : "")
    + "	"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"analytics") : stack1),{"name":"if","hash":{},"fn":container.program(74, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":262,"column":1},"end":{"line":271,"column":22}}})) != null ? stack1 : "")
    + "\n</body>\n</html>\n";
},"usePartial":true,"useData":true,"useDepths":true}));

Handlebars.registerPartial("site/navbar", this["tmpl"]["site/navbar"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " navbar-inverse";
},"3":function(container,depth0,helpers,partials,data) {
    return " branding-logo";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " style=\"background-image: url("
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"systemLogo") : stack1), depth0))
    + ");\"";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depths[1] != null ? lookupProperty(depths[1],"options") : depths[1])) != null ? lookupProperty(stack1,"inlineNav") : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.program(10, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":19,"column":5},"end":{"line":34,"column":12}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						<li><a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":20,"column":19},"end":{"line":20,"column":27}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":20,"column":29},"end":{"line":20,"column":38}}}) : helper)))
    + "</a></li>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"members") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":22,"column":6},"end":{"line":33,"column":13}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "							<li class=\"dropdown\">\n								<a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":24,"column":17},"end":{"line":24,"column":25}}}) : helper)))
    + "\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":24,"column":74},"end":{"line":24,"column":83}}}) : helper)))
    + "<b class=\"caret\"></b></a>\n								<ul class=\"dropdown-menu\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"members") : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":9},"end":{"line":28,"column":18}}})) != null ? stack1 : "")
    + "								</ul>\n							</li>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "										<li>"
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "</li>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "							<li><a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":32,"column":20},"end":{"line":32,"column":28}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":32,"column":30},"end":{"line":32,"column":39}}}) : helper)))
    + "</a></li>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"search/navbar-input"),depth0,{"name":"search/navbar-input","data":data,"indent":"\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!-- start:navbar.hbs -->\n<header class=\"navbar navbar-default navbar-fixed-top"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"inverseNav") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":53},"end":{"line":2,"column":101}}})) != null ? stack1 : "")
    + "\">\n	<div class=\"container\">\n		<div class=\"navbar-header\">\n			<a class=\"navbar-brand"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"systemLogo") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":25},"end":{"line":5,"column":72}}})) != null ? stack1 : "")
    + "\" href=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"navbar") : depth0)) != null ? lookupProperty(stack1,"index") : stack1)) != null ? lookupProperty(stack1,"link") : stack1), depth0))
    + "\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"systemLogo") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":102},"end":{"line":5,"column":190}}})) != null ? stack1 : "")
    + ">\n				"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"navbar") : depth0)) != null ? lookupProperty(stack1,"index") : stack1)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "\n			</a>\n            <a href=\"tutorial-4-changes.html\" class=\"navbar-version\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"navbar") : depth0)) != null ? lookupProperty(stack1,"index") : stack1)) != null ? lookupProperty(stack1,"version") : stack1), depth0))
    + "</a>\n			<!-- displayed on small devices -->\n			<button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#topNavigation\">\n				<span class=\"icon-bar\"></span>\n				<span class=\"icon-bar\"></span>\n				<span class=\"icon-bar\"></span>\n			</button>\n		</div>\n		<div class=\"navbar-collapse collapse\" id=\"topNavigation\">\n			<ul class=\"nav navbar-nav\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"navbar") : depth0)) != null ? lookupProperty(stack1,"topLevel") : stack1),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":4},"end":{"line":35,"column":13}}})) != null ? stack1 : "")
    + "			</ul>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"search") : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":3},"end":{"line":39,"column":10}}})) != null ? stack1 : "")
    + "		</div>\n	</div>\n</header>\n<!-- end:navbar.hbs -->\n";
},"usePartial":true,"useData":true,"useDepths":true}));

Handlebars.registerPartial("symbol/inline", this["tmpl"]["symbol/inline"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"access") || (depth0 != null ? lookupProperty(depth0,"access") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"access","hash":{},"data":data,"loc":{"start":{"line":1,"column":53},"end":{"line":1,"column":63}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"inherited") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":63},"end":{"line":1,"column":97}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return " inherited";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"unless").call(alias1,(lookupProperty(helpers,"content")||(depth0 && lookupProperty(depth0,"content"))||container.hooks.helperMissing).call(alias1,"symbol-details",{"name":"content","hash":{},"data":data,"loc":{"start":{"line":1,"column":150},"end":{"line":1,"column":176}}}),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":140},"end":{"line":1,"column":241}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " collapsible-symbol"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"expanded")),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":197},"end":{"line":1,"column":230}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return " expanded";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"primary")),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":9,"column":9}}})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"tag/summary"),depth0,{"name":"tag/summary","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "			<h2 class=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"kind") || (depth0 != null ? lookupProperty(depth0,"kind") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"kind","hash":{},"data":data,"loc":{"start":{"line":4,"column":14},"end":{"line":4,"column":22}}}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"primaryTitleHTML") || (depth0 != null ? lookupProperty(depth0,"primaryTitleHTML") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"primaryTitleHTML","hash":{},"data":data,"loc":{"start":{"line":4,"column":24},"end":{"line":4,"column":46}}}) : helper))) != null ? stack1 : "")
    + "</h2>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"list")),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":9,"column":2}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "			<h4 id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":6,"column":11},"end":{"line":6,"column":17}}}) : helper)))
    + "\" class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"kind") || (depth0 != null ? lookupProperty(depth0,"kind") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"kind","hash":{},"data":data,"loc":{"start":{"line":6,"column":26},"end":{"line":6,"column":34}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"access") || (depth0 != null ? lookupProperty(depth0,"access") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"access","hash":{},"data":data,"loc":{"start":{"line":6,"column":35},"end":{"line":6,"column":45}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"inherited") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":45},"end":{"line":6,"column":79}}})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"listTitleHTML") || (depth0 != null ? lookupProperty(depth0,"listTitleHTML") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"listTitleHTML","hash":{},"data":data,"loc":{"start":{"line":6,"column":81},"end":{"line":6,"column":100}}}) : helper))) != null ? stack1 : "")
    + "</h4>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "			<h4 id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":8,"column":11},"end":{"line":8,"column":17}}}) : helper)))
    + "\" class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"kind") || (depth0 != null ? lookupProperty(depth0,"kind") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"kind","hash":{},"data":data,"loc":{"start":{"line":8,"column":26},"end":{"line":8,"column":34}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"access") || (depth0 != null ? lookupProperty(depth0,"access") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"access","hash":{},"data":data,"loc":{"start":{"line":8,"column":35},"end":{"line":8,"column":45}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"inherited") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":45},"end":{"line":8,"column":79}}})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"symbolTitleHTML") || (depth0 != null ? lookupProperty(depth0,"symbolTitleHTML") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"symbolTitleHTML","hash":{},"data":data,"loc":{"start":{"line":8,"column":81},"end":{"line":8,"column":102}}}) : helper))) != null ? stack1 : "")
    + "</h4>\n		";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"unless").call(alias1,(lookupProperty(helpers,"content")||(depth0 && lookupProperty(depth0,"content"))||container.hooks.helperMissing).call(alias1,"symbol-details",{"name":"content","hash":{},"data":data,"loc":{"start":{"line":13,"column":152},"end":{"line":13,"column":178}}}),{"name":"unless","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":142},"end":{"line":13,"column":244}}})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  collapsible-symbol"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"expanded")),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":200},"end":{"line":13,"column":233}}})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    return " style=\"max-height: 9999px;\"";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"tag/description"),depth0,{"name":"tag/description","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"tag/param"),depth0,{"name":"tag/param","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"tag/prop"),depth0,{"name":"tag/prop","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"tag/returns"),depth0,{"name":"tag/returns","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"tag/requires"),depth0,{"name":"tag/requires","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"tag/example"),depth0,{"name":"tag/example","hash":{"options":(data && lookupProperty(data,"options"))},"data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"tag/fires"),depth0,{"name":"tag/fires","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"tag/exceptions"),depth0,{"name":"tag/exceptions","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"tag/details"),depth0,{"name":"tag/details","hash":{"options":(data && lookupProperty(data,"options"))},"data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<dt class=\"symbol-title "
    + alias4(((helper = (helper = lookupProperty(helpers,"kind") || (depth0 != null ? lookupProperty(depth0,"kind") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"kind","hash":{},"data":data,"loc":{"start":{"line":1,"column":24},"end":{"line":1,"column":32}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(data && lookupProperty(data,"primary")),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":32},"end":{"line":1,"column":108}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (data && lookupProperty(data,"options"))) && lookupProperty(stack1,"collapseSymbols")),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":108},"end":{"line":1,"column":248}}})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = (lookupProperty(helpers,"block")||(depth0 && lookupProperty(depth0,"block"))||alias2).call(alias1,"symbol-title",{"name":"block","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":11,"column":11}}})) != null ? stack1 : "")
    + "</dt>\n<dd class=\"symbol-details "
    + alias4(((helper = (helper = lookupProperty(helpers,"kind") || (depth0 != null ? lookupProperty(depth0,"kind") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"kind","hash":{},"data":data,"loc":{"start":{"line":13,"column":26},"end":{"line":13,"column":34}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(data && lookupProperty(data,"primary")),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":34},"end":{"line":13,"column":110}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (data && lookupProperty(data,"options"))) && lookupProperty(stack1,"collapseSymbols")),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":110},"end":{"line":13,"column":251}}})) != null ? stack1 : "")
    + "\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(data && lookupProperty(data,"expanded")),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":252},"end":{"line":13,"column":304}}})) != null ? stack1 : "")
    + ">\n	<div class=\"symbol-details-inner\">\n"
    + ((stack1 = (lookupProperty(helpers,"block")||(depth0 && lookupProperty(depth0,"block"))||alias2).call(alias1,"symbol-details",{"name":"block","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":2},"end":{"line":25,"column":12}}})) != null ? stack1 : "")
    + "	</div>\n</dd>";
},"usePartial":true,"useData":true}));

Handlebars.registerPartial("symbol/page", this["tmpl"]["symbol/page"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	"
    + ((stack1 = (lookupProperty(helpers,"content")||(depth0 && lookupProperty(depth0,"content"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"symbol-details",{"name":"content","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":2,"column":42}}})) != null ? stack1 : "")
    + "\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"extend")||(depth0 && lookupProperty(depth0,"extend"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"symbol/inline",{"name":"extend","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":3,"column":11}}})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("symbol/tutorial", this["tmpl"]["symbol/tutorial"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"content")||(depth0 && lookupProperty(depth0,"content"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"symbol-details",{"name":"content","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":9,"column":13}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<dl class=\"symbol tutorial-children\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"children") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":3},"end":{"line":7,"column":12}}})) != null ? stack1 : "")
    + "		</dl>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<hr/>\n				"
    + container.escapeExpression((lookupProperty(helpers,"symbol")||(depth0 && lookupProperty(depth0,"symbol"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"symbol","hash":{"options":(data && lookupProperty(data,"options")),"primary":(depth0 != null ? lookupProperty(depth0,"primary") : depth0),"list":(depth0 != null ? lookupProperty(depth0,"list") : depth0)},"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":6,"column":62}}}))
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"extend")||(depth0 && lookupProperty(depth0,"extend"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"symbol/inline",{"name":"extend","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":10,"column":11}}})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("tag/description", this["tmpl"]["tag/description"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"callout")||(depth0 && lookupProperty(depth0,"callout"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Описание","callout-primary",{"name":"callout","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":4,"column":13}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<div class=\"description classdesc\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"classdesc") || (depth0 != null ? lookupProperty(depth0,"classdesc") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"classdesc","hash":{},"data":data,"loc":{"start":{"line":3,"column":37},"end":{"line":3,"column":52}}}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":0},"end":{"line":9,"column":0}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"callout")||(depth0 && lookupProperty(depth0,"callout"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Описание","callout-primary",{"name":"callout","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":1},"end":{"line":8,"column":13}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<div class=\"description\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":7,"column":27},"end":{"line":7,"column":44}}}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"classdesc") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":9,"column":7}}})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("tag/details", this["tmpl"]["tag/details"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"callout")||(depth0 && lookupProperty(depth0,"callout"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Сведения","callout-default",{"name":"callout","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":1},"end":{"line":251,"column":13}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<form class=\"form-horizontal details\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":3},"end":{"line":14,"column":10}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"defaultvalue") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":3},"end":{"line":24,"column":10}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"augments") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":3},"end":{"line":42,"column":10}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"version") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":3},"end":{"line":52,"column":10}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"since") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":54,"column":3},"end":{"line":62,"column":10}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"inherits") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":64,"column":3},"end":{"line":72,"column":10}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"overrides") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":74,"column":3},"end":{"line":82,"column":10}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"implementations") : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":84,"column":3},"end":{"line":100,"column":10}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"implements") : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":102,"column":3},"end":{"line":118,"column":10}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"mixes") : depth0),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":120,"column":3},"end":{"line":136,"column":10}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"deprecated") : depth0),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":138,"column":3},"end":{"line":146,"column":10}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"author") : depth0),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":148,"column":3},"end":{"line":164,"column":10}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"copyright") : depth0),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":166,"column":3},"end":{"line":174,"column":10}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"license") : depth0),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":176,"column":3},"end":{"line":184,"column":10}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"hasSource") : depth0),{"name":"if","hash":{},"fn":container.program(39, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":186,"column":3},"end":{"line":194,"column":10}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"tutorials") : depth0),{"name":"if","hash":{},"fn":container.program(44, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":196,"column":3},"end":{"line":212,"column":10}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"see") : depth0),{"name":"if","hash":{},"fn":container.program(47, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":214,"column":3},"end":{"line":230,"column":10}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"todo") : depth0),{"name":"if","hash":{},"fn":container.program(50, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":232,"column":3},"end":{"line":248,"column":10}}})) != null ? stack1 : "")
    + "\n		</form>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<!-- type -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">Тип</label>\n					<div class=\"col-sm-9\">\n						<div class=\"form-control-static type-names\">"
    + container.escapeExpression((lookupProperty(helpers,"type-names")||(depth0 && lookupProperty(depth0,"type-names"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"type") : depth0),{"name":"type-names","hash":{},"data":data,"loc":{"start":{"line":11,"column":50},"end":{"line":11,"column":69}}}))
    + "</div>\n					</div>\n				</div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<!-- defaultvalue -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">Значение по умолчанию</label>\n					<div class=\"col-sm-9\">\n						<p class=\"form-control-static\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"defaultvalue") || (depth0 != null ? lookupProperty(depth0,"defaultvalue") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"defaultvalue","hash":{},"data":data,"loc":{"start":{"line":21,"column":37},"end":{"line":21,"column":53}}}) : helper)))
    + "</p>\n					</div>\n				</div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<!-- augments -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">Расширяет</label>\n					<div class=\"col-sm-9\">\n"
    + ((stack1 = (lookupProperty(helpers,"single")||(depth0 && lookupProperty(depth0,"single"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"augments") : depth0),{"name":"single","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":31,"column":6},"end":{"line":39,"column":17}}})) != null ? stack1 : "")
    + "					</div>\n				</div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "							<p class=\"form-control-static\">"
    + container.escapeExpression((lookupProperty(helpers,"linkto")||(depth0 && lookupProperty(depth0,"linkto"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"linkto","hash":{},"data":data,"loc":{"start":{"line":32,"column":38},"end":{"line":32,"column":53}}}))
    + "</p>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "							<ul class=\"form-control-static\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"augments") : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":8},"end":{"line":37,"column":17}}})) != null ? stack1 : "")
    + "							</ul>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "									<li>"
    + container.escapeExpression((lookupProperty(helpers,"linkto")||(depth0 && lookupProperty(depth0,"linkto"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"linkto","hash":{},"data":data,"loc":{"start":{"line":36,"column":13},"end":{"line":36,"column":28}}}))
    + "</li>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<!-- version -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">Версия</label>\n					<div class=\"col-sm-9\">\n						<p class=\"form-control-static\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"version") || (depth0 != null ? lookupProperty(depth0,"version") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"version","hash":{},"data":data,"loc":{"start":{"line":49,"column":37},"end":{"line":49,"column":48}}}) : helper)))
    + "</p>\n					</div>\n				</div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<!-- since -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">От</label>\n					<div class=\"col-sm-9\">\n						<p class=\"form-control-static\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"since") || (depth0 != null ? lookupProperty(depth0,"since") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"since","hash":{},"data":data,"loc":{"start":{"line":59,"column":37},"end":{"line":59,"column":46}}}) : helper)))
    + "</p>\n					</div>\n				</div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<!-- inherits -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">Унаследовано от</label>\n					<div class=\"col-sm-9\">\n						<p class=\"form-control-static\">"
    + container.escapeExpression((lookupProperty(helpers,"linkto")||(depth0 && lookupProperty(depth0,"linkto"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"inherits") : depth0),{"name":"linkto","hash":{},"data":data,"loc":{"start":{"line":69,"column":37},"end":{"line":69,"column":56}}}))
    + "</p>\n					</div>\n				</div>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<!-- overrides -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">Переопределено</label>\n					<div class=\"col-sm-9\">\n						<p class=\"form-control-static\">"
    + container.escapeExpression((lookupProperty(helpers,"linkto")||(depth0 && lookupProperty(depth0,"linkto"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"overrides") : depth0),{"name":"linkto","hash":{},"data":data,"loc":{"start":{"line":79,"column":37},"end":{"line":79,"column":57}}}))
    + "</p>\n					</div>\n				</div>\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<!-- implementations -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">Реализации</label>\n					<div class=\"col-sm-9\">\n"
    + ((stack1 = (lookupProperty(helpers,"single")||(depth0 && lookupProperty(depth0,"single"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"implementations") : depth0),{"name":"single","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(22, data, 0),"data":data,"loc":{"start":{"line":89,"column":6},"end":{"line":97,"column":17}}})) != null ? stack1 : "")
    + "					</div>\n				</div>\n";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "							<ul class=\"form-control-static\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"implementations") : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":93,"column":8},"end":{"line":95,"column":17}}})) != null ? stack1 : "")
    + "							</ul>\n";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<!-- implements -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">Реализует</label>\n					<div class=\"col-sm-9\">\n"
    + ((stack1 = (lookupProperty(helpers,"single")||(depth0 && lookupProperty(depth0,"single"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"implements") : depth0),{"name":"single","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(25, data, 0),"data":data,"loc":{"start":{"line":107,"column":6},"end":{"line":115,"column":17}}})) != null ? stack1 : "")
    + "					</div>\n				</div>\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "							<ul class=\"form-control-static\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"implements") : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":111,"column":8},"end":{"line":113,"column":17}}})) != null ? stack1 : "")
    + "							</ul>\n";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<!-- mixes -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">Объединения</label>\n					<div class=\"col-sm-9\">\n"
    + ((stack1 = (lookupProperty(helpers,"single")||(depth0 && lookupProperty(depth0,"single"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"mixes") : depth0),{"name":"single","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(28, data, 0),"data":data,"loc":{"start":{"line":125,"column":6},"end":{"line":133,"column":17}}})) != null ? stack1 : "")
    + "					</div>\n				</div>\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "							<ul class=\"form-control-static\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"mixes") : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":129,"column":8},"end":{"line":131,"column":17}}})) != null ? stack1 : "")
    + "							</ul>\n";
},"30":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<!-- deprecated -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">Устаревший</label>\n					<div class=\"col-sm-9\">\n						<p class=\"form-control-static\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"deprecated") || (depth0 != null ? lookupProperty(depth0,"deprecated") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"deprecated","hash":{},"data":data,"loc":{"start":{"line":143,"column":37},"end":{"line":143,"column":51}}}) : helper)))
    + "</p>\n					</div>\n				</div>\n";
},"32":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<!-- author -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">Автор</label>\n					<div class=\"col-sm-9\">\n"
    + ((stack1 = (lookupProperty(helpers,"single")||(depth0 && lookupProperty(depth0,"single"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"author") : depth0),{"name":"single","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(33, data, 0),"data":data,"loc":{"start":{"line":153,"column":6},"end":{"line":161,"column":17}}})) != null ? stack1 : "")
    + "					</div>\n				</div>\n";
},"33":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "							<ul class=\"form-control-static\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"author") : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":157,"column":8},"end":{"line":159,"column":17}}})) != null ? stack1 : "")
    + "							</ul>\n";
},"35":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<!-- copyright -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">Copyright</label>\n					<div class=\"col-sm-9\">\n						<p class=\"form-control-static\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"copyright") || (depth0 != null ? lookupProperty(depth0,"copyright") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"copyright","hash":{},"data":data,"loc":{"start":{"line":171,"column":37},"end":{"line":171,"column":50}}}) : helper)))
    + "</p>\n					</div>\n				</div>\n";
},"37":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<!-- license -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">Лицензия</label>\n					<div class=\"col-sm-9\">\n						<p class=\"form-control-static\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"license") || (depth0 != null ? lookupProperty(depth0,"license") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"license","hash":{},"data":data,"loc":{"start":{"line":181,"column":37},"end":{"line":181,"column":48}}}) : helper)))
    + "</p>\n					</div>\n				</div>\n";
},"39":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<!-- source -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">Источник</label>\n					<div class=\"col-sm-9\">\n						<p class=\"form-control-static\">"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"outputSourceFiles") : stack1),{"name":"if","hash":{},"fn":container.program(40, data, 0),"inverse":container.program(42, data, 0),"data":data,"loc":{"start":{"line":191,"column":37},"end":{"line":191,"column":111}}})) != null ? stack1 : "")
    + "</p>\n					</div>\n				</div>\n";
},"40":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = ((helper = (helper = lookupProperty(helpers,"sourcelink") || (depth0 != null ? lookupProperty(depth0,"sourcelink") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"sourcelink","hash":{},"data":data,"loc":{"start":{"line":191,"column":70},"end":{"line":191,"column":86}}}) : helper))) != null ? stack1 : "");
},"42":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"source") || (depth0 != null ? lookupProperty(depth0,"source") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"source","hash":{},"data":data,"loc":{"start":{"line":191,"column":94},"end":{"line":191,"column":104}}}) : helper)));
},"44":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<!-- tutorials -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">Руководство</label>\n					<div class=\"col-sm-9\">\n"
    + ((stack1 = (lookupProperty(helpers,"single")||(depth0 && lookupProperty(depth0,"single"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"tutorials") : depth0),{"name":"single","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(45, data, 0),"data":data,"loc":{"start":{"line":201,"column":6},"end":{"line":209,"column":17}}})) != null ? stack1 : "")
    + "					</div>\n				</div>\n";
},"45":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "							<ul class=\"form-control-static\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"tutorials") : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":205,"column":8},"end":{"line":207,"column":17}}})) != null ? stack1 : "")
    + "							</ul>\n";
},"47":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<!-- see -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">См.</label>\n					<div class=\"col-sm-9\">\n"
    + ((stack1 = (lookupProperty(helpers,"single")||(depth0 && lookupProperty(depth0,"single"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"see") : depth0),{"name":"single","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(48, data, 0),"data":data,"loc":{"start":{"line":219,"column":6},"end":{"line":227,"column":17}}})) != null ? stack1 : "")
    + "					</div>\n				</div>\n";
},"48":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "							<ul class=\"form-control-static\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"see") : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":223,"column":8},"end":{"line":225,"column":17}}})) != null ? stack1 : "")
    + "							</ul>\n";
},"50":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<!-- todo -->\n				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label\">To Do</label>\n					<div class=\"col-sm-9\">\n"
    + ((stack1 = (lookupProperty(helpers,"single")||(depth0 && lookupProperty(depth0,"single"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"todo") : depth0),{"name":"single","hash":{},"fn":container.program(51, data, 0),"inverse":container.program(53, data, 0),"data":data,"loc":{"start":{"line":237,"column":6},"end":{"line":245,"column":17}}})) != null ? stack1 : "")
    + "					</div>\n				</div>\n";
},"51":function(container,depth0,helpers,partials,data) {
    return "							<p class=\"form-control-static\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</p>\n";
},"53":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "							<ul class=\"form-control-static\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"todo") : depth0),{"name":"each","hash":{},"fn":container.program(54, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":241,"column":8},"end":{"line":243,"column":17}}})) != null ? stack1 : "")
    + "							</ul>\n";
},"54":function(container,depth0,helpers,partials,data) {
    return "									<li>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"hasDetails") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":252,"column":7}}})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("tag/example", this["tmpl"]["tag/example"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"callout")||(depth0 && lookupProperty(depth0,"callout"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Пример","callout-example",{"name":"callout","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":17,"column":12}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"examples") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":1},"end":{"line":16,"column":10}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"caption") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":6,"column":9}}})) != null ? stack1 : "")
    + "		<div class=\"example-code\">\n			<pre class=\"prettyprint source language-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lang") || (depth0 != null ? lookupProperty(depth0,"lang") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lang","hash":{},"data":data,"loc":{"start":{"line":8,"column":43},"end":{"line":8,"column":51}}}) : helper)))
    + "\"><code class=\"language-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lang") || (depth0 != null ? lookupProperty(depth0,"lang") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lang","hash":{},"data":data,"loc":{"start":{"line":8,"column":75},"end":{"line":8,"column":83}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"code") || (depth0 != null ? lookupProperty(depth0,"code") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"code","hash":{},"data":data,"loc":{"start":{"line":8,"column":85},"end":{"line":8,"column":93}}}) : helper)))
    + "</code></pre>\n		</div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"run") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":2},"end":{"line":15,"column":9}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<div class=\"example-caption\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"caption") || (depth0 != null ? lookupProperty(depth0,"caption") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"caption","hash":{},"data":data,"loc":{"start":{"line":5,"column":31},"end":{"line":5,"column":44}}}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<p class=\"example-run\">\n			<input type=\"hidden\" value=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"code") || (depth0 != null ? lookupProperty(depth0,"code") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"code","hash":{},"data":data,"loc":{"start":{"line":12,"column":31},"end":{"line":12,"column":39}}}) : helper)))
    + "\">\n			<button type=\"button\" class=\"btn btn-default code-run\">Выполнить</button>\n		</p>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"examples") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":18,"column":7}}})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("tag/exceptions", this["tmpl"]["tag/exceptions"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"callout")||(depth0 && lookupProperty(depth0,"callout"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Throws","callout-danger",{"name":"callout","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":13,"column":13}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<form class=\"form-horizontal exceptions\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"exceptions") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":3},"end":{"line":11,"column":12}}})) != null ? stack1 : "")
    + "		</form>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label exceptions-type\">"
    + container.escapeExpression((lookupProperty(helpers,"type-names")||(depth0 && lookupProperty(depth0,"type-names"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),{"name":"type-names","hash":{},"data":data,"loc":{"start":{"line":6,"column":59},"end":{"line":6,"column":78}}}))
    + "</label>\n					<div class=\"col-sm-9\">\n						<div class=\"form-control-static exceptions-description\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":8,"column":62},"end":{"line":8,"column":79}}}) : helper))) != null ? stack1 : "")
    + "</div>\n					</div>\n				</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"exceptions") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":14,"column":7}}})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("tag/fires", this["tmpl"]["tag/fires"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"callout")||(depth0 && lookupProperty(depth0,"callout"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Fires","callout-warning",{"name":"callout","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":13,"column":13}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<form class=\"form-horizontal fires\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"fires") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":3},"end":{"line":11,"column":12}}})) != null ? stack1 : "")
    + "		</form>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label fires-event\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":6,"column":55},"end":{"line":6,"column":65}}}) : helper))) != null ? stack1 : "")
    + "</label>\n					<div class=\"col-sm-9\">\n						<div class=\"form-control-static fires-summary\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"summary") || (depth0 != null ? lookupProperty(depth0,"summary") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data,"loc":{"start":{"line":8,"column":53},"end":{"line":8,"column":66}}}) : helper))) != null ? stack1 : "")
    + "</div>\n					</div>\n				</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"fires") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":14,"column":7}}})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("tag/param", this["tmpl"]["tag/param"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"child") : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":5,"column":12}}})) != null ? stack1 : "")
    + "	<table class=\"params table table-striped\">\n		<thead>\n		<tr>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"paramsHasNames") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":3},"end":{"line":11,"column":10}}})) != null ? stack1 : "")
    + "			<th>Тип</th>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"paramsHasAttributes") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":3},"end":{"line":15,"column":10}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"paramsHasDefaults") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":3},"end":{"line":18,"column":10}}})) != null ? stack1 : "")
    + "			<th class=\"last\">Описание</th>\n		</tr>\n		</thead>\n		<tbody>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"params") : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":2},"end":{"line":44,"column":11}}})) != null ? stack1 : "")
    + "		</tbody>\n	</table>\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"child") : depth0),{"name":"unless","hash":{},"fn":container.program(21, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":1},"end":{"line":49,"column":12}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "<div class=\"callout callout-info\">\n	<h5>Параметры</h5>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "				<th>Имя</th>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "				<th>Атрибуты</th>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "				<th>Умолчания</th>\n";
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "			<tr>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"paramsHasNames") : depths[1]),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":4},"end":{"line":27,"column":11}}})) != null ? stack1 : "")
    + "				<td>"
    + container.escapeExpression((lookupProperty(helpers,"type-names")||(depth0 && lookupProperty(depth0,"type-names"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),{"name":"type-names","hash":{},"data":data,"loc":{"start":{"line":28,"column":8},"end":{"line":28,"column":27}}}))
    + "</td>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"paramsHasAttributes") : depths[1]),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":4},"end":{"line":31,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"paramsHasDefaults") : depths[1]),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":4},"end":{"line":34,"column":11}}})) != null ? stack1 : "")
    + "				<td class=\"last\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":5},"end":{"line":38,"column":12}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"params") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":5},"end":{"line":41,"column":12}}})) != null ? stack1 : "")
    + "				</td>\n			</tr>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<td><code>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":26,"column":15},"end":{"line":26,"column":23}}}) : helper)))
    + "</code></td>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<td class=\"attributes\">"
    + container.escapeExpression((lookupProperty(helpers,"param-attribs")||(depth0 && lookupProperty(depth0,"param-attribs"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"param-attribs","hash":{},"data":data,"loc":{"start":{"line":30,"column":28},"end":{"line":30,"column":50}}}))
    + "</td>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<td>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"defaultvalue") || (depth0 != null ? lookupProperty(depth0,"defaultvalue") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"defaultvalue","hash":{},"data":data,"loc":{"start":{"line":33,"column":9},"end":{"line":33,"column":25}}}) : helper)))
    + "</td>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":37,"column":6},"end":{"line":37,"column":23}}}) : helper))) != null ? stack1 : "")
    + "\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"tag/param"),depth0,{"name":"tag/param","hash":{"child":true},"data":data,"indent":"\t\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"21":function(container,depth0,helpers,partials,data) {
    return "</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"params") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":50,"column":7}}})) != null ? stack1 : "");
},"usePartial":true,"useData":true,"useDepths":true}));

Handlebars.registerPartial("tag/prop", this["tmpl"]["tag/prop"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"child") : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":5,"column":12}}})) != null ? stack1 : "")
    + "	<table class=\"params table table-striped\">\n		<thead>\n		<tr>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"propertiesHasNames") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":3},"end":{"line":11,"column":10}}})) != null ? stack1 : "")
    + "			<th>Тип</th>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"propertiesHasAttributes") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":3},"end":{"line":15,"column":10}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"propertiesHasDefaults") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":3},"end":{"line":18,"column":10}}})) != null ? stack1 : "")
    + "			<th class=\"last\">Описание</th>\n		</tr>\n		</thead>\n		<tbody>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"properties") : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":2},"end":{"line":44,"column":11}}})) != null ? stack1 : "")
    + "		</tbody>\n	</table>\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"child") : depth0),{"name":"unless","hash":{},"fn":container.program(21, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":1},"end":{"line":49,"column":12}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "<div class=\"callout callout-info\">\n	<h5>Свойства</h5>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "				<th>Имя</th>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "				<th>Атрибуты</th>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "				<th>Умолчания</th>\n";
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "			<tr>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"propertiesHasNames") : depths[1]),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":4},"end":{"line":27,"column":11}}})) != null ? stack1 : "")
    + "				<td>"
    + container.escapeExpression((lookupProperty(helpers,"type-names")||(depth0 && lookupProperty(depth0,"type-names"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),{"name":"type-names","hash":{},"data":data,"loc":{"start":{"line":28,"column":8},"end":{"line":28,"column":27}}}))
    + "</td>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"propertiesHasAttributes") : depths[1]),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":4},"end":{"line":31,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"propertiesHasDefaults") : depths[1]),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":4},"end":{"line":34,"column":11}}})) != null ? stack1 : "")
    + "				<td class=\"last\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":5},"end":{"line":38,"column":12}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"properties") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":5},"end":{"line":41,"column":12}}})) != null ? stack1 : "")
    + "				</td>\n			</tr>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<td><code>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":26,"column":15},"end":{"line":26,"column":23}}}) : helper)))
    + "</code></td>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<td class=\"attributes\">"
    + container.escapeExpression((lookupProperty(helpers,"param-attribs")||(depth0 && lookupProperty(depth0,"param-attribs"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"param-attribs","hash":{},"data":data,"loc":{"start":{"line":30,"column":28},"end":{"line":30,"column":50}}}))
    + "</td>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<td>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"defaultvalue") || (depth0 != null ? lookupProperty(depth0,"defaultvalue") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"defaultvalue","hash":{},"data":data,"loc":{"start":{"line":33,"column":9},"end":{"line":33,"column":25}}}) : helper)))
    + "</td>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":37,"column":6},"end":{"line":37,"column":23}}}) : helper))) != null ? stack1 : "")
    + "\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"tag/prop"),depth0,{"name":"tag/prop","hash":{"child":true},"data":data,"indent":"\t\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"21":function(container,depth0,helpers,partials,data) {
    return "</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"properties") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":50,"column":7}}})) != null ? stack1 : "");
},"usePartial":true,"useData":true,"useDepths":true}));

Handlebars.registerPartial("tag/requires", this["tmpl"]["tag/requires"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"callout")||(depth0 && lookupProperty(depth0,"callout"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Requires","callout-warning",{"name":"callout","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":13,"column":13}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<form class=\"form-horizontal requires\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"requires") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":3},"end":{"line":11,"column":12}}})) != null ? stack1 : "")
    + "		</form>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label requires-type\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":6,"column":57},"end":{"line":6,"column":67}}}) : helper))) != null ? stack1 : "")
    + "</label>\n					<div class=\"col-sm-9\">\n						<div class=\"form-control-static requires-summary\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"summary") || (depth0 != null ? lookupProperty(depth0,"summary") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data,"loc":{"start":{"line":8,"column":56},"end":{"line":8,"column":69}}}) : helper))) != null ? stack1 : "")
    + "</div>\n					</div>\n				</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"requires") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":14,"column":7}}})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("tag/returns", this["tmpl"]["tag/returns"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"callout")||(depth0 && lookupProperty(depth0,"callout"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Возвращает","callout-success",{"name":"callout","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":13,"column":13}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<form class=\"form-horizontal returns\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"returns") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":3},"end":{"line":11,"column":12}}})) != null ? stack1 : "")
    + "		</form>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<div class=\"form-group\">\n					<label class=\"col-sm-3 control-label returns-type\">"
    + container.escapeExpression((lookupProperty(helpers,"type-names")||(depth0 && lookupProperty(depth0,"type-names"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),{"name":"type-names","hash":{},"data":data,"loc":{"start":{"line":6,"column":56},"end":{"line":6,"column":75}}}))
    + "</label>\n					<div class=\"col-sm-9\">\n						<div class=\"form-control-static returns-description\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":8,"column":59},"end":{"line":8,"column":76}}}) : helper))) != null ? stack1 : "")
    + "</div>\n					</div>\n				</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"returns") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":14,"column":7}}})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("tag/summary", this["tmpl"]["tag/summary"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"summary\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"summary") || (depth0 != null ? lookupProperty(depth0,"summary") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"summary","hash":{},"data":data,"loc":{"start":{"line":1,"column":36},"end":{"line":1,"column":49}}}) : helper))) != null ? stack1 : "")
    + "</div>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"summary") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":62}}})) != null ? stack1 : "");
},"useData":true}));

this["tmpl"]["doclet"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"extend")||(depth0 && lookupProperty(depth0,"extend"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"site/layout",{"name":"extend","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":4,"column":11}}})) != null ? stack1 : "");
},"useData":true});

this["tmpl"]["global"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n"
    + ((stack1 = (lookupProperty(helpers,"content")||(depth0 && lookupProperty(depth0,"content"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"primary",{"name":"content","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":1},"end":{"line":4,"column":13}}})) != null ? stack1 : "")
    + "\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"extend")||(depth0 && lookupProperty(depth0,"extend"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"site/layout",{"name":"extend","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":6,"column":11}}})) != null ? stack1 : "");
},"useData":true});

this["tmpl"]["list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"content")||(depth0 && lookupProperty(depth0,"content"))||alias2).call(alias1,"primary",{"name":"content","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":4,"column":13}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"content")||(depth0 && lookupProperty(depth0,"content"))||alias2).call(alias1,"secondary",{"name":"content","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":1},"end":{"line":16,"column":13}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<h2>"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"primaryTitleHTML") : stack1), depth0)) != null ? stack1 : "")
    + "</h2>\n";
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<article class=\"secondary\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"members") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":3},"end":{"line":14,"column":10}}})) != null ? stack1 : "")
    + "		</article>\n";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<dl class=\"symbol\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"members") : stack1),{"name":"each","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":5},"end":{"line":12,"column":14}}})) != null ? stack1 : "")
    + "				</dl>\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(data && lookupProperty(data,"first")),{"name":"unless","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":10,"column":40}}})) != null ? stack1 : "")
    + "\n						"
    + container.escapeExpression((lookupProperty(helpers,"symbol")||(depth0 && lookupProperty(depth0,"symbol"))||container.hooks.helperMissing).call(alias1,depth0,{"name":"symbol","hash":{"options":(depths[1] != null ? lookupProperty(depths[1],"options") : depths[1]),"list":true},"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":11,"column":50}}}))
    + "\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "<hr/>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"extend")||(depth0 && lookupProperty(depth0,"extend"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"site/layout",{"name":"extend","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":17,"column":11}}})) != null ? stack1 : "");
},"useData":true,"useDepths":true});

this["tmpl"]["module"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n"
    + ((stack1 = (lookupProperty(helpers,"content")||(depth0 && lookupProperty(depth0,"content"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"primary",{"name":"content","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":1},"end":{"line":19,"column":13}}})) != null ? stack1 : "")
    + "\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<dl class=\"symbol\">\n			<dt class=\"symbol-title "
    + alias4(((helper = (helper = lookupProperty(helpers,"kind") || (depth0 != null ? lookupProperty(depth0,"kind") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"kind","hash":{},"data":data,"loc":{"start":{"line":5,"column":27},"end":{"line":5,"column":35}}}) : helper)))
    + "\"></dt>\n			<dd class=\"symbol-details "
    + alias4(((helper = (helper = lookupProperty(helpers,"kind") || (depth0 != null ? lookupProperty(depth0,"kind") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"kind","hash":{},"data":data,"loc":{"start":{"line":6,"column":29},"end":{"line":6,"column":37}}}) : helper)))
    + "\">\n				<div class=\"symbol-details-inner\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"tag/description"),(depth0 != null ? lookupProperty(depth0,"doclet") : depth0),{"name":"tag/description","data":data,"indent":"\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"modules") : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":5},"end":{"line":13,"column":14}}})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"tag/requires"),(depth0 != null ? lookupProperty(depth0,"doclet") : depth0),{"name":"tag/requires","data":data,"indent":"\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"tag/details"),(depth0 != null ? lookupProperty(depth0,"doclet") : depth0),{"name":"tag/details","hash":{"options":(depth0 != null ? lookupProperty(depth0,"options") : depth0)},"data":data,"indent":"\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "				</div>\n			</dd>\n		</dl>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"classdesc") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":12,"column":13}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"tag/description"),depth0,{"name":"tag/description","data":data,"indent":"\t\t\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"extend")||(depth0 && lookupProperty(depth0,"extend"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"site/layout",{"name":"extend","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":21,"column":11}}})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["tmpl"]["readme"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n"
    + ((stack1 = (lookupProperty(helpers,"content")||(depth0 && lookupProperty(depth0,"content"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"content",{"name":"content","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":1},"end":{"line":8,"column":13}}})) != null ? stack1 : "")
    + "\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<section class=\"readme-section\">\n			<article>"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"contents") : stack1), depth0)) != null ? stack1 : "")
    + "</article>\n		</section>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!-- start:readme.hbs -->\n"
    + ((stack1 = (lookupProperty(helpers,"extend")||(depth0 && lookupProperty(depth0,"extend"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"site/layout",{"name":"extend","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":10,"column":11}}})) != null ? stack1 : "")
    + "<!-- end:readme.hbs -->";
},"useData":true});

this["tmpl"]["source"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n"
    + ((stack1 = (lookupProperty(helpers,"content")||(depth0 && lookupProperty(depth0,"content"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"content",{"name":"content","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":1},"end":{"line":9,"column":13}}})) != null ? stack1 : "")
    + "\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<section class=\"source-section\">\n			<article>"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"contents") : stack1), depth0)) != null ? stack1 : "")
    + "</article>\n			<pre class=\"prettyprint source language-javascript"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"linenums") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":53},"end":{"line":7,"column":97}}})) != null ? stack1 : "")
    + "\"><code class=\"language-javascript\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"code") : stack1), depth0)) != null ? stack1 : "")
    + "</code></pre>\n		</section>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return " line-numbers";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!-- start:source.tmpl.hbs -->\n"
    + ((stack1 = (lookupProperty(helpers,"extend")||(depth0 && lookupProperty(depth0,"extend"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"site/layout",{"name":"extend","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":11,"column":11}}})) != null ? stack1 : "")
    + "<!-- end:source.tmpl.hbs -->";
},"useData":true});

this["tmpl"]["tutorial"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n"
    + ((stack1 = (lookupProperty(helpers,"content")||(depth0 && lookupProperty(depth0,"content"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"content",{"name":"content","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":1},"end":{"line":18,"column":13}}})) != null ? stack1 : "")
    + "\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<section class=\"tutorial-section\">\n			<article>"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"contents") : stack1), depth0)) != null ? stack1 : "")
    + "</article>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"children") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":3},"end":{"line":16,"column":10}}})) != null ? stack1 : "")
    + "		</section>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<div class=\"related-tutorials\">\n					<h2>Связанные руководства</h2>\n					<ul>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"children") : stack1),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":13,"column":15}}})) != null ? stack1 : "")
    + "					</ul>\n				</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "							<li>"
    + container.escapeExpression((lookupProperty(helpers,"linkto")||(depth0 && lookupProperty(depth0,"linkto"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"longname") : depth0),{"name":"linkto","hash":{},"data":data,"loc":{"start":{"line":12,"column":11},"end":{"line":12,"column":30}}}))
    + "</li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!-- start:readme.hbs -->\n"
    + ((stack1 = (lookupProperty(helpers,"extend")||(depth0 && lookupProperty(depth0,"extend"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"site/layout",{"name":"extend","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":20,"column":11}}})) != null ? stack1 : "")
    + "<!-- end:readme.hbs -->";
},"useData":true});

if (typeof exports === 'object' && exports) {module.exports = this["tmpl"];}