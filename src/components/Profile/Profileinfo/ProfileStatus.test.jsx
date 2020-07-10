import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
      const component = create(<ProfileStatus status="my status" />);
      const instance = component.getInstance();

      expect(instance.state.status).toBe("my status");
    });

    test("span should be has correct inner text", () => {
      const component = create(<ProfileStatus status="my status" />);
      const instance = component.root;
      const span = instance.findByType("span");

      expect(span.props.children).toBe("my status");
    });

    test("input shouldn't be displayed after creation", () => {
      const component = create(<ProfileStatus status="my status" />);
      const instance = component.root;
      
      expect(() => {
        instance.findByType("input");
      }).toThrow();
    });

    test("span should be displayed after creation", () => {
      const component = create(<ProfileStatus status="my status" />);
      const instance = component.root;
      const span = instance.findByType("span");

      expect(span).not.toBeNull();
    });

    test("span should be displayed after creation", () => {
      const component = create(<ProfileStatus status="my status" />);
      const instance = component.root;
      const span = instance.findByType("span");

      expect(span).not.toBeNull();
    });

    test("input should be displayed in edit mode instead span", () => {
      const component = create(<ProfileStatus status="my status" />);
      const instance = component.root;
      const span = instance.findByType("span");

      span.props.onDoubleClick();
      
      const input = instance.findByType("input");

      expect(input.props.value).toBe("my status");
    });

    test("callback should be called", () => {
      const mockCallback = jest.fn();
      let component = create(<ProfileStatus status="my status" updateStatus={mockCallback} />);
      const instance = component.getInstance();
      instance.deactivateEditMode();
      
      expect(mockCallback.mock.calls.length).toBe(1);
    });
  });