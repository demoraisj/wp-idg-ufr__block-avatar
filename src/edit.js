import { useBlockProps } from '@wordpress/block-editor';
import { UFRInput, UFRSelect, UFRGaleryBtn, UFRBlockHeader, UFRIconPicker } from "wp-idg-ufr__block-components";
import { Fragment } from 'react';
import { LightenDarkenColor } from 'lighten-darken-color';

import './editor.scss';

/**
 * Componente renderizado no editor de blocos
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/
 *
 * @param attributes
 * @param setAttributes
 * @param isSelected
 * @returns {JSX.Element}
 */
export default function edit( { attributes, setAttributes, isSelected } ) {
	const { type, text, size, img, icon, color } = attributes;
	const typeOptions = [
		{ label: 'Avatar com Ícone', value: 'icon' },
		{ label: 'Avatar com Imagem', value: 'img' },
	];
	const sizeOptions = [
		{ label: 'Grande', value: 'large' },
		{ label: 'Médio', value: 'medium' },
		{ label: 'Pequeno', value: '' },
	];
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
	function switchContentChoice( type ) {
		switch ( type ) {
			case 'icon':
				return (
					<Fragment>
						<UFRInput
							label="Cor do ícone"
							attr="color"
							type="color"
							value={ color }
							setter={ setAttributes }
						/>
						<UFRIconPicker setter={ setAttributes } value={ icon } />
					</Fragment>
				);

			case 'img':
				return (
					<Fragment>
						<UFRGaleryBtn
							text="ESCOLHER A IMAGEM"
							icon="fas fa-image"
							allowedTypes={ [ 'image' ] }
							attr="img"
							setter={ setAttributes }
						/>
						<UFRInput
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
		<div { ...useBlockProps( { className: 'edit block-responsive ufr-block-component' } ) }>
			<div className="row align-items-center">
				<div className="col config">
					<UFRBlockHeader
						title="Avatar"
						description="Escolha o tipo de avatar, e como ele será apresentado."
					/>

					<UFRSelect
						label="Selecione o tipo de avatar"
						attr="type"
						value={ type }
						options={ typeOptions }
						setter={ setAttributes }
					/>
					<UFRSelect
						label="Selecione o tamanho do avatar"
						attr="size"
						value={ size }
						options={ sizeOptions }
						setter={ setAttributes }
					/>
					<UFRInput
						label="Texto que será exibido junto ao avatar (Opcional)"
						attr="text"
						value={ text }
						setter={ setAttributes }
					/>

					{ switchContentChoice( type ) }
				</div>

				<div className="row preview">
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
		</div>
	) : (
		<div { ...useBlockProps( { className: 'show block-responsive ufr-block-component' } ) }>
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
