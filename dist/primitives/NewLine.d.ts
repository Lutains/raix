export interface NewLineProps {
    /**
     * The number of newlines to insert.
     * @default 1
     */
    count?: number;
}
export declare const NewLine: ({ count }: NewLineProps) => string | null;
