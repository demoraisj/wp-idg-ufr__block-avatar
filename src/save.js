/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';
import {LightenDarkenColor} from "lighten-darken-color";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	const { type, text, size, img, icon, color } = attributes;
	const textSize = size === 'large' ? 'h3' : size === 'medium' ? 'h5' : '';

	function switchType(type) {
		switch (type) {
			case 'icon':

				const iconBackground = {
					background: LightenDarkenColor(color, 50),
				}

				return (
					<span className="image type-icon" style={ iconBackground }>
                        <i className={ icon ?? 'fas fa-user' } aria-hidden="true" style={ { color } }/>
                    </span>
				)

			case 'img':
				return (
					<span className="image">
                        <img src={ img ?? 'https://picsum.photos/id/823/400' } alt="Avatar"/>
                    </span>
				);

			/* case 'letter':
				return (
					<span className="image letter bg-support-01 text-pure-0 type-letter">
						{ letter }
					</span>
				); */
		}
	}

	return (
		<div { ...useBlockProps.save() }>
			<div className="row">
				<div className="col-12 text-center">
					<span className={ 'br-avatar ' + size } title={ text }>
						{ switchType(type) }
					</span>
				</div>
				<div className={'col-12 text-center mt-3 ' + textSize}>
					{ text }
				</div>
			</div>
		</div>
	);
}
