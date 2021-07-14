import { MENTIONABLES } from './mentionables';

export const renderMentionLabel = (mentionable) => {
    const entry = MENTIONABLES.find((m) => m.value === mentionable.value);
    if (!entry) return 'unknown option';
    return `${entry.name} - ${entry.email}`;
};
