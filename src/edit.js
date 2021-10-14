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

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import Select from "./components/Select";
import Input from "./components/Input";
import GaleryBtn from "./components/GaleryBtn";
import { Fragment } from "react";
import IconPicker from "./components/IconPicker";
import { LightenDarkenColor } from 'lighten-darken-color';
import Header from "./components/Header";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function edit({ attributes, setAttributes, isSelected }) {
	const { type, text, size, img, icon, color } = attributes;
	const typeOptions = [
		{ label: 'Avatar com Ícone', value: 'icon' },
		{ label: 'Avatar com Imagem', value: 'img' },
		// { label: 'Avatar com Letra', value: 'letter' },
	];
	const sizeOptions = [
		{ label: 'Grande', value: 'large' },
		{ label: 'Médio', value: 'medium' },
		{ label: 'Pequeno', value: '' },
	];
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
		}
	}
	function switchContentChoice(type) {
		switch (type) {
			case 'icon':
				return (
					<Fragment>
						<Input
							label="Cor do ícone"
							attr="color"
							type="color"
							value={ color }
							setter={ setAttributes }
						/>
						<IconPicker setter={ setAttributes } />
					</Fragment>
				)

			case 'img':
				return (
					<Fragment>
						<GaleryBtn
							text="ESCOLHER A IMAGEM"
							icon="fas fa-image"
							allowedTypes={ ['image'] }
							attr="img"
							setter={ setAttributes }
						/>
						<Input
							label="Ou insira um endereço:"
							attr="img"
							value={ img ?? '' }
							setter={ setAttributes }
						/>
					</Fragment>
				);
		}
	}

	return isSelected ? (
		<div { ...useBlockProps({ className: 'edit block-responsive' }) }>
			<div className="row align-items-center">
				<div className="col config">
					<Header />

					<Select
						label="Selecione o tipo de avatar"
						attr="type"
						value={ type }
						options={ typeOptions }
						setter={ setAttributes }
					/>
					<Select
						label="Selecione o tamanho do avatar"
						attr="size"
						value={ size }
						options={ sizeOptions }
						setter={ setAttributes }
					/>
					<Input
						label="Texto que será exibido junto ao avatar (Opcional)"
						attr="text"
						value={ text }
						setter={ setAttributes }
					/>

					{ switchContentChoice(type) }
				</div>

				<div className="row preview">
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
		</div>
	) : (
		<div { ...useBlockProps({ className: 'show block-responsive' }) }>
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
