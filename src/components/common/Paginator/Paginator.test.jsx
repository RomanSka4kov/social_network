import React from 'react';
import { create } from 'react-test-renderer';
import Paginator from './Paginator';

describe("Paginator components tests", () => {
    test("pages count is 11 but should be displayed 10", () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />);
        const root = component.root;
        const spans = root.findAllByType('span');
        expect(spans.length).toBe(10);
    });

    test("if pages count more than 10 button NEXT should be displayed", () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />);
        const root = component.root;
        const buttons = root.findAllByType('button');
        expect(buttons.length).toBe(1);
    });
});