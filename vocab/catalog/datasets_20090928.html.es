<?xml version="1.0" encoding="utf-8" standalone="no"?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xml:lang="es" lang="es" xmlns:owl="http://www.w3.org/2002/07/owl#" xmlns:wot="http://xmlns.com/wot/0.1/" xmlns:cc="http://web.resource.org/cc/" xmlns:vann="http://purl.org/vocab/vann/" xmlns:dct="http://purl.org/dc/terms/" xmlns:foaf="http://xmlns.com/foaf/0.1/" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:skos="http://www.w3.org/2004/02/skos/core#" xmlns:xsd="http://www.w3.org/2001/XMLSchema#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:org="http://data.fundacionctic.org/vocab/comun/org#" xmlns="http://www.w3.org/1999/xhtml"><head><title>Vocabulario de Catálogos de Datasets</title><link rel="meta" type="application/rdf+xml" title="Vocabulario de Catálogos de Datasets" href="http://data.fundacionctic.org/vocab/catalog/datasets_20090928.rdf"/><link type="text/css" rel="stylesheet" media="all" href="https://espinr.github.io/vocab/css/vocab.css"/></head><body><p><a href="http://www.fundacionctic.org/"><img src="https://espinr.github.io/vocab/css/logo-ctic.gif" alt="Fundación CTIC"/></a></p><h1>Vocabulario de Catálogos de Datasets</h1><dl class="doc-info"><dt>Esta versión</dt><dd><a href="http://data.fundacionctic.org/vocab/catalog/datasets_20090928">http://data.fundacionctic.org/vocab/catalog/datasets_20090928</a> [<a href="http://data.fundacionctic.org/vocab/catalog/datasets_20090928.html">HTML</a>] [<a href="http://data.fundacionctic.org/vocab/catalog/datasets_20090928.rdf">RDF</a>]</dd><dt>La última versión</dt><dd><a href="http://data.fundacionctic.org/vocab/catalog/datasets#">http://data.fundacionctic.org/vocab/catalog/datasets#</a></dd><dt>Autor(es)</dt><dd>Martin Alvarez-Espinar (CTIC CT)</dd></dl><p class="rights">CTIC CT - Creative Commons 3.0 (BY-NC-SA)</p><p class="license">Este trabajo está bajo una <a href="http://creativecommons.org/licenses/by-nc-sa/3.0">licencia de Creative Commons</a>.</p><h2 id="toc">Tabla de Contenidos</h2><ul class="toc"><li><a href="#sec-introduction">Introducción</a></li><li><a href="#sec-namespace">Espacio de nombres</a></li><li><a href="#sec-terms">Resumen de los términos</a></li><li><a href="#sec-classes">Clases del vocabulario</a></li><li><a href="#sec-properties">Propiedades del vocabulario</a></li><li><a href="#sec-schema">Esquema RDF</a></li><li><a href="#sec-license">Licencia</a></li></ul><h2 id="sec-introduction">Introducción</h2><p class="comment">Este vocabulario se utiliza para modelar los catálogos de conjuntos de datos y las relaciones con los datasets</p><h2 id="sec-changes">Cambios desde la versión anterior</h2><ul><li><span class="date">2009-09-28</span> - primera publicación</li></ul><h2 id="sec-namespace">Espacio de nombres</h2><p>El URI para este vocabulario es</p><pre><code>http://data.fundacionctic.org/vocab/catalog/datasets#</code></pre><p>
          Cuando se use en documentos XML se sugiere el prefijo <code>ds</code></p><p>Cada clase o propiedad en el vocabulario tiene un URI que se construye añadiendo un nombre de término al URI del vocabulario. Por ejemplo:</p><pre><code>http://data.fundacionctic.org/vocab/catalog/datasets#memberOf
http://data.fundacionctic.org/vocab/catalog/datasets#Catalog</code></pre><p>El nombre del término para una clase siempre comienza por un caracter en mayúsculas. Cuando el nombre del término se compone de 
        varias palabras concatenadas, éstas se juntan y cada nombre separado comienza por mayúsculas. Por ejemplo:
      </p><pre><code>Catalog
Dataset</code></pre><p>El nombre del término para una propiedad siempre comienza por un caracter en minúsculas. Cuando el nombre del término se compone de 
        varias palabras concatenadas, éstas se juntan y cada nombre separado comienza por mayúsculas. Por ejemplo:
      </p><pre><code>memberOf
</code></pre><h2 id="sec-terms">Resumen de los términos</h2><p>Este vocabulario define

      2 clases 
        
      y
      
          una propiedad
        
      .
    </p><table><tr><th>Nombre del término</th><th>Tipo</th><th>Definición</th></tr><tr><td><a href="http://data.fundacionctic.org/vocab/catalog/datasets#Catalog" title="http://data.fundacionctic.org/vocab/catalog/datasets#Catalog">Catalog</a></td><td>clase</td><td>Catálogo donde se expresan conjuntos de datos</td></tr><tr><td><a href="http://data.fundacionctic.org/vocab/catalog/datasets#Dataset" title="http://data.fundacionctic.org/vocab/catalog/datasets#Dataset">Dataset</a></td><td>clase</td><td>Un conjunto de datos</td></tr><tr><td><a href="http://data.fundacionctic.org/vocab/catalog/datasets#memberOf" title="http://data.fundacionctic.org/vocab/catalog/datasets#memberOf">memberOf</a></td><td>propiedad</td><td>Propiedad que define que un Dataset forma parte de un Catálogo</td></tr></table><h2 id="sec-classes">Clases del vocabulario</h2><div class="class"><h3 id="Catalog">Clase: Catalog</h3><div class="description"><p class="definition"><strong>Definición: </strong>Catálogo donde se expresan conjuntos de datos</p><p class="comment">Catálogo donde se expresan conjuntos de datos</p><table class="properties"><tbody><tr><th>URI:</th><td>http://data.fundacionctic.org/vocab/catalog/datasets#Catalog</td></tr><tr><th>Etiqueta:</th><td>Catálogo de datasets</td></tr></tbody></table><h4>Historia</h4><ul class="historyList"><li><span class="date">2009-09-28</span> - primera publicación</li></ul></div></div><div class="class"><h3 id="Dataset">Clase: Dataset</h3><div class="description"><p class="definition"><strong>Definición: </strong>Un conjunto de datos</p><p class="comment">Un conjunto de datos</p><table class="properties"><tbody><tr><th>URI:</th><td>http://data.fundacionctic.org/vocab/catalog/datasets#Dataset</td></tr><tr><th>Etiqueta:</th><td>Dataset</td></tr><tr><th>Subclase de</th><td><a href="http://rdfs.org/ns/void#Dataset">http://rdfs.org/ns/void#Dataset</a></td></tr><tr><th>Más información:</th><td>
              
                  Un <a href="http://data.fundacionctic.org/vocab/catalog/datasets#Dataset" title="http://data.fundacionctic.org/vocab/catalog/datasets#Dataset">ds:Dataset</a>
                 es algo que, entre otras cosas,  
                
        es un
        <a href="http://rdfs.org/ns/void#Dataset">http://rdfs.org/ns/void#Dataset</a></td></tr></tbody></table><h4>Historia</h4><ul class="historyList"><li><span class="date">2009-09-28</span> - primera publicación</li></ul></div></div><h2 id="sec-properties">Propiedades del vocabulario</h2><div class="property"><h3 id="memberOf">Propiedad: memberOf</h3><div class="description"><p class="definition"><strong>Definición: </strong>[El valor de esta propiedad es] Propiedad que define que un Dataset forma parte de un Catálogo</p><p class="comment">Propiedad que define que un Dataset forma parte de un Catálogo</p><table class="properties"><tbody><tr><th>URI:</th><td>http://data.fundacionctic.org/vocab/catalog/datasets#memberOf</td></tr><tr><th>Etiqueta:</th><td>Un Dataset es miembro de un Catálogo</td></tr><tr><th>Dominio</th><td><a href="http://data.fundacionctic.org/vocab/catalog/datasets#Dataset" title="http://data.fundacionctic.org/vocab/catalog/datasets#Dataset">ds:Dataset</a></td></tr><tr><th>Rango</th><td><a href="http://data.fundacionctic.org/vocab/catalog/datasets#Catalog" title="http://data.fundacionctic.org/vocab/catalog/datasets#Catalog">ds:Catalog</a></td></tr><tr><th>Más información:</th><td>
                    Tener un <a href="http://data.fundacionctic.org/vocab/catalog/datasets#memberOf" title="http://data.fundacionctic.org/vocab/catalog/datasets#memberOf">ds:memberOf</a>
                    implica ser
                   algo que, entre otras cosas, es un <a href="http://data.fundacionctic.org/vocab/catalog/datasets#Dataset" title="http://data.fundacionctic.org/vocab/catalog/datasets#Dataset">ds:Dataset</a></td></tr></tbody></table><h4>Historia</h4><ul class="historyList"><li><span class="date">2009-09-28</span> - primera publicación</li></ul></div></div><h2 id="sec-schema">Esquema RDF</h2><p>El esquema incluido aquí es sólo informativo. El esquema normativo está en <a href="http://data.fundacionctic.org/vocab/catalog/datasets_20090928.rdf">http://data.fundacionctic.org/vocab/catalog/datasets_20090928.rdf</a></p><pre><code class="xml"><span class="elem">&lt;rdf:RDF</span>
   <span class="attr">xmlns:</span>="<span class="attrVal">http://data.fundacionctic.org/vocab/catalog/datasets#</span>"
   <span class="attr">xmlns:foaf</span>="<span class="attrVal">http://xmlns.com/foaf/0.1/</span>"
   <span class="attr">xmlns:owl</span>="<span class="attrVal">http://www.w3.org/2002/07/owl#</span>"
   <span class="attr">xmlns:rdf</span>="<span class="attrVal">http://www.w3.org/1999/02/22-rdf-syntax-ns#</span>"
   <span class="attr">xmlns:rdfs</span>="<span class="attrVal">http://www.w3.org/2000/01/rdf-schema#</span>"
   <span class="attr">xmlns:skos</span>="<span class="attrVal">http://www.w3.org/2004/02/skos/core#</span>"
   <span class="attr">xmlns:xsd</span>="<span class="attrVal">http://www.w3.org/2001/XMLSchema#</span>"
   <span class="attr">xmlns:dc</span>="<span class="attrVal">http://purl.org/dc/elements/1.1/</span>"
   <span class="attr">xmlns:dcterms</span>="<span class="attrVal">http://purl.org/dc/terms/</span>"
   <span class="attr">xmlns:dctype</span>="<span class="attrVal">http://purl.org/dc/dcmitype/</span>"
   <span class="attr">xmlns:vann</span>="<span class="attrVal">http://purl.org/vocab/vann/</span>"
   <span class="attr">xmlns:cc</span>="<span class="attrVal">http://web.resource.org/cc/</span>" <span class="attr">xml:base</span>="<span class="attrVal">http://data.fundacionctic.org/vocab/catalog</span>"<span class="elem">&gt;</span>
  
  <span class="elem">&lt;owl:Ontology</span> <span class="attr">rdf:about</span>="<span class="attrVal"/>"<span class="elem">&gt;</span>
    <span class="elem">&lt;dc:identifier</span><span class="elem">&gt;</span>
      <span class="text">http://data.fundacionctic.org/vocab/catalog/datasets_20090928</span>
    <span class="elem">&lt;/dc:identifier&gt;</span>
    <span class="elem">&lt;dc:date</span><span class="elem">&gt;</span><span class="text">2009-09-28</span><span class="elem">&lt;/dc:date&gt;</span>
    <span class="elem">&lt;dcterms:issued</span><span class="elem">&gt;</span><span class="text">2009-09-28</span><span class="elem">&lt;/dcterms:issued&gt;</span>
    <span class="elem">&lt;dc:title</span> <span class="attr">xml:lang</span>="<span class="attrVal">es</span>"<span class="elem">&gt;</span><span class="text">Vocabulario de Catálogos de Datasets</span><span class="elem">&lt;/dc:title&gt;</span>
    <span class="elem">&lt;dc:title</span> <span class="attr">xml:lang</span>="<span class="attrVal">en</span>"<span class="elem">&gt;</span><span class="text">Dataset Catalog Vocabulary</span><span class="elem">&lt;/dc:title&gt;</span>
    <span class="elem">&lt;rdfs:comment</span> <span class="attr">xml:lang</span>="<span class="attrVal">es</span>"<span class="elem">&gt;</span>
      <span class="text">Este vocabulario se utiliza para modelar los catálogos de conjuntos de </span>
      <span class="text">datos y las relaciones con los datasets</span>
    <span class="elem">&lt;/rdfs:comment&gt;</span>
    <span class="elem">&lt;rdfs:comment</span> <span class="attr">xml:lang</span>="<span class="attrVal">en</span>"<span class="elem">&gt;</span>
      <span class="text">This vocabulary is used for modelling catalogs of datasets and its </span>
      <span class="text">relationships with the datasets</span>
    <span class="elem">&lt;/rdfs:comment&gt;</span>
    <span class="elem">&lt;dcterms:isVersionOf</span> <span class="attr">rdf:resource</span>="<span class="attrVal">http://data.fundacionctic.org/vocab/catalog/datasets#</span>"<span class="elem">/&gt;</span>
    <span class="elem">&lt;dc:creator</span><span class="elem">&gt;</span><span class="text">CTIC CT</span><span class="elem">&lt;/dc:creator&gt;</span>
    <span class="elem">&lt;cc:license</span> <span class="attr">rdf:resource</span>="<span class="attrVal">http://creativecommons.org/licenses/by-nc-sa/3.0</span>"<span class="elem">/&gt;</span>
    <span class="elem">&lt;dc:rights</span> <span class="attr">xml:lang</span>="<span class="attrVal">es</span>"<span class="elem">&gt;</span><span class="text">CTIC CT - Creative Commons 3.0 (BY-NC-SA)</span><span class="elem">&lt;/dc:rights&gt;</span>
    <span class="elem">&lt;dc:rights</span> <span class="attr">xml:lang</span>="<span class="attrVal">en</span>"<span class="elem">&gt;</span><span class="text">CTIC CT - Creative Commons 3.0 (BY-NC-SA)</span><span class="elem">&lt;/dc:rights&gt;</span>
    <span class="elem">&lt;vann:preferredNamespaceUri</span><span class="elem">&gt;</span><span class="text">http://data.fundacionctic.org/vocab/catalog/datasets#</span><span class="elem">&lt;/vann:preferredNamespaceUri&gt;</span>
    <span class="elem">&lt;vann:preferredNamespacePrefix</span><span class="elem">&gt;</span><span class="text">ds</span><span class="elem">&lt;/vann:preferredNamespacePrefix&gt;</span>
    <span class="elem">&lt;dcterms:hasFormat</span><span class="elem">&gt;</span>
      <span class="elem">&lt;dctype:Text</span> <span class="attr">rdf:about</span>="<span class="attrVal">http://data.fundacionctic.org/vocab/catalog/datasets_20090928.html</span>"<span class="elem">&gt;</span>
        <span class="elem">&lt;dc:format</span><span class="elem">&gt;</span>
          <span class="elem">&lt;dcterms:IMT</span><span class="elem">&gt;</span>
            <span class="elem">&lt;rdf:value</span><span class="elem">&gt;</span><span class="text">text/html</span><span class="elem">&lt;/rdf:value&gt;</span>
            <span class="elem">&lt;rdfs:label</span><span class="elem">&gt;</span><span class="text">HTML</span><span class="elem">&lt;/rdfs:label&gt;</span>
          <span class="elem">&lt;/dcterms:IMT&gt;</span>
        <span class="elem">&lt;/dc:format&gt;</span>
      <span class="elem">&lt;/dctype:Text&gt;</span>
    <span class="elem">&lt;/dcterms:hasFormat&gt;</span>
    <span class="elem">&lt;dcterms:hasFormat</span><span class="elem">&gt;</span>
      <span class="elem">&lt;dctype:Text</span> <span class="attr">rdf:about</span>="<span class="attrVal">http://data.fundacionctic.org/vocab/catalog/datasets_20090928.rdf</span>"<span class="elem">&gt;</span>
        <span class="elem">&lt;dc:format</span><span class="elem">&gt;</span>
          <span class="elem">&lt;dcterms:IMT</span><span class="elem">&gt;</span>
            <span class="elem">&lt;rdf:value</span><span class="elem">&gt;</span><span class="text">application/rdf+xml</span><span class="elem">&lt;/rdf:value&gt;</span>
            <span class="elem">&lt;rdfs:label</span><span class="elem">&gt;</span><span class="text">RDF</span><span class="elem">&lt;/rdfs:label&gt;</span>
          <span class="elem">&lt;/dcterms:IMT&gt;</span>
        <span class="elem">&lt;/dc:format&gt;</span>
      <span class="elem">&lt;/dctype:Text&gt;</span>
    <span class="elem">&lt;/dcterms:hasFormat&gt;</span>
  <span class="elem">&lt;/owl:Ontology&gt;</span>
  
  <span class="elem">&lt;rdfs:Class</span> <span class="attr">rdf:about</span>="<span class="attrVal">http://data.fundacionctic.org/vocab/catalog/datasets#Catalog</span>"<span class="elem">&gt;</span>
    <span class="elem">&lt;rdfs:isDefinedBy</span> <span class="attr">rdf:resource</span>="<span class="attrVal">http://data.fundacionctic.org/vocab/catalog/datasets#</span>"<span class="elem">/&gt;</span>
    <span class="elem">&lt;rdfs:label</span> <span class="attr">xml:lang</span>="<span class="attrVal">es</span>"<span class="elem">&gt;</span><span class="text">Catálogo de datasets</span><span class="elem">&lt;/rdfs:label&gt;</span>
    <span class="elem">&lt;rdfs:comment</span> <span class="attr">xml:lang</span>="<span class="attrVal">es</span>"<span class="elem">&gt;</span><span class="text">Catálogo donde se expresan conjuntos de datos</span><span class="elem">&lt;/rdfs:comment&gt;</span>
    <span class="elem">&lt;skos:definition</span> <span class="attr">xml:lang</span>="<span class="attrVal">es</span>"<span class="elem">&gt;</span><span class="text">Catálogo donde se expresan conjuntos de datos</span><span class="elem">&lt;/skos:definition&gt;</span>
    <span class="elem">&lt;rdfs:label</span> <span class="attr">xml:lang</span>="<span class="attrVal">en</span>"<span class="elem">&gt;</span><span class="text">Catalog of Datasets</span><span class="elem">&lt;/rdfs:label&gt;</span>
    <span class="elem">&lt;rdfs:comment</span> <span class="attr">xml:lang</span>="<span class="attrVal">en</span>"<span class="elem">&gt;</span><span class="text">Catalog which have defined datasets in</span><span class="elem">&lt;/rdfs:comment&gt;</span>
    <span class="elem">&lt;skos:definition</span> <span class="attr">xml:lang</span>="<span class="attrVal">en</span>"<span class="elem">&gt;</span><span class="text">Catalog which have defined datasets in</span><span class="elem">&lt;/skos:definition&gt;</span>
    <span class="elem">&lt;dcterms:issued</span><span class="elem">&gt;</span><span class="text">2009-09-28</span><span class="elem">&lt;/dcterms:issued&gt;</span>
  <span class="elem">&lt;/rdfs:Class&gt;</span>
  
  <span class="elem">&lt;rdfs:Class</span> <span class="attr">rdf:about</span>="<span class="attrVal">http://data.fundacionctic.org/vocab/catalog/datasets#Dataset</span>"<span class="elem">&gt;</span>
    <span class="elem">&lt;rdfs:isDefinedBy</span> <span class="attr">rdf:resource</span>="<span class="attrVal">http://data.fundacionctic.org/vocab/catalog/datasets#</span>"<span class="elem">/&gt;</span>
    <span class="elem">&lt;rdfs:label</span> <span class="attr">xml:lang</span>="<span class="attrVal">es</span>"<span class="elem">&gt;</span><span class="text">Dataset</span><span class="elem">&lt;/rdfs:label&gt;</span>
    <span class="elem">&lt;rdfs:comment</span> <span class="attr">xml:lang</span>="<span class="attrVal">es</span>"<span class="elem">&gt;</span><span class="text">Un conjunto de datos</span><span class="elem">&lt;/rdfs:comment&gt;</span>
    <span class="elem">&lt;skos:definition</span> <span class="attr">xml:lang</span>="<span class="attrVal">es</span>"<span class="elem">&gt;</span><span class="text">Un conjunto de datos</span><span class="elem">&lt;/skos:definition&gt;</span>
    <span class="elem">&lt;rdfs:label</span> <span class="attr">xml:lang</span>="<span class="attrVal">en</span>"<span class="elem">&gt;</span><span class="text">Dataset</span><span class="elem">&lt;/rdfs:label&gt;</span>
    <span class="elem">&lt;rdfs:comment</span> <span class="attr">xml:lang</span>="<span class="attrVal">en</span>"<span class="elem">&gt;</span><span class="text">A dataset</span><span class="elem">&lt;/rdfs:comment&gt;</span>
    <span class="elem">&lt;skos:definition</span> <span class="attr">xml:lang</span>="<span class="attrVal">en</span>"<span class="elem">&gt;</span><span class="text">A dataset</span><span class="elem">&lt;/skos:definition&gt;</span>
    <span class="elem">&lt;rdfs:subClassOf</span> <span class="attr">rdf:resource</span>="<span class="attrVal">http://rdfs.org/ns/void#Dataset</span>"<span class="elem">/&gt;</span>
    <span class="elem">&lt;dcterms:issued</span><span class="elem">&gt;</span><span class="text">2009-09-28</span><span class="elem">&lt;/dcterms:issued&gt;</span>
  <span class="elem">&lt;/rdfs:Class&gt;</span>
  
  <span class="elem">&lt;rdf:Property</span> <span class="attr">rdf:about</span>="<span class="attrVal">http://data.fundacionctic.org/vocab/catalog/datasets#memberOf</span>"<span class="elem">&gt;</span>
    <span class="elem">&lt;rdfs:isDefinedBy</span> <span class="attr">rdf:resource</span>="<span class="attrVal">http://data.fundacionctic.org/vocab/catalog/datasets#</span>"<span class="elem">/&gt;</span>
    <span class="elem">&lt;rdfs:label</span> <span class="attr">xml:lang</span>="<span class="attrVal">es</span>"<span class="elem">&gt;</span><span class="text">Un Dataset es miembro de un Catálogo</span><span class="elem">&lt;/rdfs:label&gt;</span>
    <span class="elem">&lt;rdfs:comment</span> <span class="attr">xml:lang</span>="<span class="attrVal">es</span>"<span class="elem">&gt;</span>
      <span class="text">Propiedad que define que un Dataset forma parte de un Catálogo</span>
    <span class="elem">&lt;/rdfs:comment&gt;</span>
    <span class="elem">&lt;skos:definition</span> <span class="attr">xml:lang</span>="<span class="attrVal">es</span>"<span class="elem">&gt;</span>
      <span class="text">Propiedad que define que un Dataset forma parte de un Catálogo</span>
    <span class="elem">&lt;/skos:definition&gt;</span>
    <span class="elem">&lt;rdfs:label</span> <span class="attr">xml:lang</span>="<span class="attrVal">en</span>"<span class="elem">&gt;</span><span class="text">A Dataset is a member of a Catalog</span><span class="elem">&lt;/rdfs:label&gt;</span>
    <span class="elem">&lt;rdfs:comment</span> <span class="attr">xml:lang</span>="<span class="attrVal">en</span>"<span class="elem">&gt;</span>
      <span class="text">Property which defines a Dataset which is a member of a Catalog</span>
    <span class="elem">&lt;/rdfs:comment&gt;</span>
    <span class="elem">&lt;skos:definition</span> <span class="attr">xml:lang</span>="<span class="attrVal">en</span>"<span class="elem">&gt;</span>
      <span class="text">Property which defines a Dataset which is a member of a Catalog</span>
    <span class="elem">&lt;/skos:definition&gt;</span>
    <span class="elem">&lt;rdfs:range</span> <span class="attr">rdf:resource</span>="<span class="attrVal">http://data.fundacionctic.org/vocab/catalog/datasets#Catalog</span>"<span class="elem">/&gt;</span>
    <span class="elem">&lt;rdfs:domain</span> <span class="attr">rdf:resource</span>="<span class="attrVal">http://data.fundacionctic.org/vocab/catalog/datasets#Dataset</span>"<span class="elem">/&gt;</span>
    <span class="elem">&lt;dcterms:issued</span><span class="elem">&gt;</span><span class="text">2009-09-28</span><span class="elem">&lt;/dcterms:issued&gt;</span>
  <span class="elem">&lt;/rdf:Property&gt;</span>
<span class="elem">&lt;/rdf:RDF&gt;</span>
</code></pre><h2 id="sec-license">Licencia</h2><p class="license">Este trabajo está bajo una <a href="http://creativecommons.org/licenses/by-nc-sa/3.0">licencia de Creative Commons</a>.</p></body></html>