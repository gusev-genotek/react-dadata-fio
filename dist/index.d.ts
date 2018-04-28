/// <reference types="react" />
import * as React from 'react';
import './react-dadata.css';
export declare namespace ReactDadataFio {
    type DadataSuggestion = {
        value: string;
        unrestricted_value: string;
        data: DadataFio;
    };
    type DadataFio = {
        surname: string;
        name: string;
        patronymic: string;
        gender: "MALE" | "FEMALE" | "UNKNOWN";
        qc: string;
    };
    interface Props {
        token: string;
        placeholder?: string;
        query?: string;
        autoload?: boolean;
        onChange?: (suggestion: DadataSuggestion) => void;
    }
    interface State {
        query: string;
        inputQuery: string;
        inputFocused: boolean;
        suggestions: Array<DadataSuggestion>;
        suggestionIndex: number;
        suggestionsVisible: boolean;
    }
}
export declare class ReactDadataFio extends React.PureComponent<ReactDadataFio.Props, ReactDadataFio.State> {
    /**
     * HTML-input
     */
    protected textInput: HTMLInputElement;
    /**
     * XMLHttpRequest instance
     */
    protected xhr: XMLHttpRequest;
    constructor(props: ReactDadataFio.Props);
    componentDidMount(): void;
    onInputFocus: () => void;
    onInputBlur: () => void;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    fetchSuggestions: () => void;
    onSuggestionClick: (index: number, event: React.MouseEvent<HTMLDivElement>) => void;
    selectSuggestion: (index: number) => void;
    setCursorToEnd: (element: any) => void;
    getHighlightWords: () => string[];
    render(): JSX.Element;
}
