// Placeholder for the full GLTFLoader.js library code.
// In a real scenario, the full code would be placed here.
THREE.GLTFLoader = function ( manager ) {

	THREE.Loader.call( this, manager );

	this.dracoLoader = null;
	this.ktx2Loader = null;
	this.meshoptDecoder = null;

	this.pluginCallbacks = [];

	this.register( function ( parser ) {

		return new GLTFMaterialsClearcoatExtension( parser );

	} );

	this.register( function ( parser ) {

		return new GLTFTextureTransformExtension( parser );

	} );

	this.register( function ( parser ) {

		return new GLTFMaterialsSheenExtension( parser );

	} );

	this.register( function ( parser ) {

		return new GLTFMaterialsTransmissionExtension( parser );

	} );

	this.register( function ( parser ) {

		return new GLTFMaterialsVolumeExtension( parser );

	} );

	this.register( function ( parser ) {

		return new GLTFMaterialsIorExtension( parser );

	} );

	this.register( function ( parser ) {

		return new GLTFMaterialsSpecularExtension( parser );

	} );

	this.register( function ( parser ) {

		return new GLTFMaterialsAnisotropyExtension( parser );

	} );

	this.register( function ( parser ) {

		return new GLTFLightsExtension( parser );

	} );

	this.register( function ( parser ) {

		return new GLTFMaterialsUnlitExtension( parser );

	} );

};
