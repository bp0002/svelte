export default {
	html: `
		<button>action</button>
	`,

	test ( assert, component, target, window ) {
		const button = target.querySelector( 'button' );
		const eventEnter = new window.MouseEvent( 'mouseenter' );
		const eventLeave = new window.MouseEvent( 'mouseleave' );

		button.dispatchEvent( eventEnter );
		assert.htmlEqual( target.innerHTML, `
			<button>action</button>
			<div class="tooltip">Perform an Action</div>
		` );

		button.dispatchEvent( eventLeave );
		assert.htmlEqual( target.innerHTML, `
			<button>action</button>
		` );
	}
};
