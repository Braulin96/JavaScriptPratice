import React, { useState, useEffect } from 'react'
import copy from 'clipboard-copy'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const TokenExample = () => {
	// State for tooltip message
	const [tooltipMessage, setTooltipMessage] = useState('Select a text')

	//Listen for selection change and update tooltip message
	useEffect(() => {
		const handleSelectionChange = () => {
			const selectedText = window.getSelection().toString()
			if (selectedText) {
				setTooltipMessage('Copy to clipboard!')
			} else {
				setTooltipMessage('Select a text')
			}
		}
		// Attach the event listener to the document
		document.addEventListener('selectionchange', handleSelectionChange)
		// Clean up the event listener when the component unmounts
		return () => {
			document.removeEventListener('selectionchange', handleSelectionChange)
		}
	}, [])

	const handleCopy = () => {
		const selectedText = window.getSelection().toString()
		if (selectedText) {
			copy(selectedText)
				.then(() => {
					// Delay the update to 'Text copied to clipboard!' to allow 'Copy to clipboard!' to be displayed first
					setTimeout(() => {
						setTooltipMessage('Text copied to clipboard!')
						// Reset tooltip message after 2 seconds
						setTimeout(() => setTooltipMessage('Select a text'), 2000)
					}, 100)
				})
				.catch((err) => {
					console.error('Failed to copy: ', err)
				})
		} else {
			// Update tooltip message when no text is selected
			setTooltipMessage('Select a text')
		}
	}

	return (
		<div className='w-full text-center'>
		 <h1 className="text-lg pb-2">Use this button to copy selected text</h1>
			<button
			  className="px-10 py-2 bg-gray-800 text-white rounded-3xl hover:bg-gray-700"
				data-tooltip-id="my-tooltip"
				data-tooltip-content={tooltipMessage}
				size={20}
				data-for="copy-tooltip"
				onClick={handleCopy}
			>
				Copy to Clipboard
			</button>

			<Tooltip id="my-tooltip" />
		</div>
	)
}

export default TokenExample
