import { useBlockProps } from '@wordpress/block-editor';
import { LightenDarkenColor } from 'lighten-darken-color';

/**
 * Componente renderizado no front-end
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/
 *
 * @param attributes
 * @returns {JSX.Element}
 */
export default function save( { attributes } ) {
	const { type, text, size, img, icon, color } = attributes;
	const textSize = size === 'large' ? 'h3' : size === 'medium' ? 'h5' : '';

	function switchType( type ) {
		switch ( type ) {
			case 'icon':
				const iconBackground = {
					background: LightenDarkenColor( color, 50 ),
				};

				return (
					<span className="image type-icon" style={ iconBackground }>
						<i
							className={ icon ?? 'fas fa-user' }
							aria-hidden="true"
							style={ { color } }
						/>
					</span>
				);

			case 'img':
				return (
					<span className="image">
						<img
							src={ img ?? 'https://picsum.photos/id/823/400' }
							alt="Avatar"
						/>
					</span>
				);
		}
	}

	return (
		<div { ...useBlockProps.save() }>
			<div className="row">
				<div className="col-12 text-center">
					<span className={ 'br-avatar ' + size } title={ text }>
						{ switchType( type ) }
					</span>
				</div>
				<div className={ 'col-12 text-center mt-3 ' + textSize }>
					{ text }
				</div>
			</div>
		</div>
	);
}
