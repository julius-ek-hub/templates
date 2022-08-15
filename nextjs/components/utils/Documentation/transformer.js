import { FunctionComponent } from 'react';

function escape(string) {
  return string.replace(/[\/.*+?|[()\]{}\$^-]/g, function ($0) {
    return '\\' + $0;
  });
}

/**
 * @param {String} text
 * @param {Array.<{
 * startsWith: String,
 * endsWith: String,
 * Decorator: FunctionComponent
 * }>} rules
 */

const transform = (text, rules = []) => {
  let temp_transformed = text;

  let matches = [];
  const transformed = [];

  const findMatches = (rule) => {
    const start = escape(rule.startsWith);
    const end = escape(rule.endsWith);
    const match = new RegExp(`${start}[^(${start}|${end})]*${end}`, 'gi').exec(
      temp_transformed
    );

    if (match) {
      const value = match[0];
      const index = match.index;
      temp_transformed = match.input.replace(value, '.'.repeat(value.length));
      matches.push({
        value,
        index,
        trimmed: value.substring(
          rule.startsWith.length,
          value.length - rule.endsWith.length
        ),
        Decorator: rule.Decorator,
      });

      findMatches(rule);
    }
  };
  const transformMatchesToArray = (start = 0, matchIndex = 0) => {
    if (typeof matchIndex !== 'number') return;
    const match = matches[matchIndex];
    if (!match) return;
    const Decorator = match.Decorator;
    transformed.push(temp_transformed.substring(start, match.index));
    transformed.push(<Decorator key={match.index} match={match.trimmed} />);
    const nextMatchIndex = matches[matchIndex + 1]?.index;
    transformed.push(
      temp_transformed.substring(
        match.index + match.value.length,
        nextMatchIndex || temp_transformed.length
      )
    );
    transformMatchesToArray(nextMatchIndex, matchIndex + 1);
  };

  rules.forEach(findMatches);

  if (matches.length === 0) return text;

  transformMatchesToArray();

  return transformed;
};

export default transform;
