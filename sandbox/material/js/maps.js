function el(id) {
    return document.getElementById(id);
}
// convert radians to degrees
function radToDeg(rad) {
  return rad * 360 / (Math.PI * 2);
}
// convert degrees to radians
function degToRad(deg) {
  return deg * Math.PI * 2 / 360;
}
// modulo for negative values
function mod(n) {
  return ((n % (2 * Math.PI)) + (2 * Math.PI)) % (2 * Math.PI);
}

function flyTo(location, done) {
    var duration = 2000;
    var zoom = view.getZoom();
    var parts = 2;
    var called = false;
    function callback(complete) {
      --parts;
      if (called) {
        return;
      }
      if (parts === 0 || !complete) {
        called = true;
        done(complete);
      }
    }
    view.animate({
      center: location,
      duration: duration
    }, callback);
    view.animate({
      zoom: zoom - 1,
      duration: duration / 2
    }, {
      zoom: zoom,
      duration: duration / 2
    }, callback);
}

/*
 * Get an array with the IDs of features in this pixel.
 */
var getFeatureId = function(pixel) {
    var features = [];
    map.forEachFeatureAtPixel(pixel, function(feature) {
        features.push(feature);
    });
    var info = [];
    if (features.length > 0) {
        var i, ii;
        for (i = 0, ii = features.length; i < ii; ++i) {
            info.push(features[i].get('name'));
        }
        map.getTarget().style.cursor = 'pointer';
    } else {
      map.getTarget().style.cursor = '';
    }
    return info;
};

var xixon = ol.proj.fromLonLat([-5.66112, 43.532201]);
var calle = ol.proj.fromLonLat([-5.67, 43.533]);
var URL_KML = './data/gijon.kml';

var ATTRIBUTION_HTML = "Datos del <a href='http://gijon.es'>Ayuntamiento de Gijón</a> sobre " + 
    "<a href='https://openlayers.org/'>OpenLayers</a>. " ;

var projection = ol.proj.get('EPSG:3857');

var view = new ol.View({
    center: xixon,
    maxZoom: 18,
    zoom: 14
});

var rasterOSM = new ol.layer.Tile({
    title: 'Mapa Base',
    visible: false,
    source: new ol.source.OSM()
});

var streetsVector = new ol.layer.Vector({
    title: 'Calles',
    source: new ol.source.Vector({
        url: URL_KML,
        format: new ol.format.KML()
    })
});

var geolocation = new ol.Geolocation({
    projection: view.getProjection()
});


var zonasVerdes = new ol.layer.Tile({
    title: 'Zonas Verdes',
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://ide.gijon.es:8080/geoserver/wms?',
        params: {LAYERS: 'Gijon:LU_Zona_Verde', TILED: true},
        attributions: [
            new ol.Attribution({
                html: ATTRIBUTION_HTML + 'Mapa del <a href="http://ide.gijon.es">IDE del Ayto. de Gijón</a>.'
            }),
          ]            
  })
});

var ortoFotoLayer = new ol.layer.Tile({
    title: 'Mapa Satélite',
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://ide.gijon.es:8080/geoserver/wms?',
        params: {LAYERS: 'Gijon:Orto_Gijon_2006', TILED: true},
        attributions: [
            new ol.Attribution({
                html: ATTRIBUTION_HTML + 'Mapa del <a href="http://ide.gijon.es">IDE del Ayto. de Gijón</a>.'
            }),
          ]
  })
});

var cartoLightLayer = new ol.layer.Tile({ 
    title: 'Mapa Luminoso',
    visible: false,
    source: new ol.source.XYZ({ 
        url:'http://{1-4}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',
        attributions: [
            new ol.Attribution({
                html: ATTRIBUTION_HTML + 'Mapa de <a href="https://carto.com/">Carto</a>.'
            }),
          ]
    })
});

var cartoDarkLayer = new ol.layer.Tile({ 
    title: 'Mapa Oscuro',
    visible: false,
    source: new ol.source.XYZ({ 
        url:'http://{1-4}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png',
        attributions: [
            new ol.Attribution({
                html: ATTRIBUTION_HTML + 'Mapa de <a href="https://carto.com/">Carto</a>.'
            }),
          ]
    })
});

// Position & Geolocation Features
var accuracyFeature = new ol.Feature();
var positionFeature = new ol.Feature({
    style : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 6,
            fill: new ol.style.Fill({
                color: '#3399CC'
            }),
            stroke: new ol.style.Stroke({
                color: '#fff',
                width: 2
            })
        })
    })
});

var positionOverlay = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [accuracyFeature, positionFeature]
    })
});

var map = new ol.Map({
    target: document.getElementById('map'),
    layers: [rasterOSM, cartoLightLayer, cartoDarkLayer, ortoFotoLayer, streetsVector],
    overlays: [positionOverlay],
    projection: projection,
    controls: [
        new ol.control.Zoom({
            className: 'button-zoom'
        }),
        new ol.control.Attribution({
            collapsible: true
        })
    ],
    view: view
});

function initMaps() {

    $('#layerDarkMap').attr("checked","checked");
    ortoFotoLayer.setVisible(false);
    cartoDarkLayer.setVisible(true);
    cartoLightLayer.setVisible(false);


    $('#geolocate').on('change', function() {
        geolocation.setTracking(this.checked);
        positionOverlay.setVisible( this.checked );
        map.render();              
    });

    // Control for Layers 
    $('input[type=radio][name=layerControl]').on('change', function() {
        switch($(this).val()) {
            case 'layerSatellite':
                ortoFotoLayer.setVisible(true);
                cartoDarkLayer.setVisible(false);
                cartoLightLayer.setVisible(false);
                break;
            case 'layerDarkMap':
                ortoFotoLayer.setVisible(false);
                cartoDarkLayer.setVisible(true);
                cartoLightLayer.setVisible(false);
                break;
            case 'layerLightMap':
                ortoFotoLayer.setVisible(false);
                cartoDarkLayer.setVisible(false);
                cartoLightLayer.setVisible(true);                    
                break;
        };
    });

    $('button').on('click', function() {
        flyTo(calle, function() {});
    });

    // update the HTML page when the position changes.
    geolocation.on('change', function() {
        var html = [
            'Accuracy: ' + geolocation.getAccuracy(),
            'Heading: ' + Math.round(radToDeg(geolocation.getHeading())) + '&deg;',
            'Speed: ' + (geolocation.getSpeed() * 3.6).toFixed(1) + ' km/h'
            ].join('<br />');
        document.getElementById('info2').innerHTML = html; 
    });

    // handle geolocation error.
    geolocation.on('error', function(error) {
        var info = document.getElementById('info2');
        info.innerHTML = error.message;
        info.style.display = '';
    });

    geolocation.on('change:accuracyGeometry', function() {
        accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
    });

    geolocation.on('change:position', function() {
        var coordinates = geolocation.getPosition();
        positionFeature.setGeometry(coordinates ?
            new ol.geom.Point(coordinates) : null);
    });

    map.on('pointermove', function(evt) {
        if (evt.dragging) {
            return;
        }
        var pixel = map.getEventPixel(evt.originalEvent);
        getFeatureId(pixel);
    });

    map.on('click', function(evt) {
        console.log(getFeatureId(evt.pixel));
    });            
}

