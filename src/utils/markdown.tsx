import type { ReactNode } from 'react';

import { InlineLink } from '@/components/typography';

// Two patterns, not one shared source: `split` splices *every* capture group
// into its output, so the splitter has to expose exactly one group (the whole
// link) while the matcher exposes the text and href separately.
const LINK_SPLIT = /(\[[^\]]+\]\([^)]+\))/g;
const LINK_MATCH = /\[([^\]]+)\]\(([^)]+)\)/;

// The data files carry inline Markdown links (`[text](url)`) and nothing else,
// so this handles that one pattern rather than pulling in a Markdown parser.
// Index keys are safe here: the input is a static string, so parts never reorder.
const parseInlineLinks = (text: string): ReactNode => {
	const parts = text.split(LINK_SPLIT);

	return parts.map((part, i) => {
		const match = part.match(LINK_MATCH);

		if (match) {
			return (
				<InlineLink key={i} href={match[2]}>
					{match[1]}
				</InlineLink>
			);
		}

		return part;
	});
};

export { parseInlineLinks };
