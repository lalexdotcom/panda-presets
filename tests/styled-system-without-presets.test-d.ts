import { expectAssignable } from 'tsd'
import { Token } from '../styled-system-without-presets/tokens';

// Default preset/theme
expectAssignable<Token>("colors.red.100");