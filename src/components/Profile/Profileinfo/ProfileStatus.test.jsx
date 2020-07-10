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
      expect(span.props.children).toBe("my status");;
    });

    test("span should be displayed after creation", () => {
      const component = create(<ProfileStatus status="my status" />);
      const instance = component.root;
      const span = instance.findByType("span");
      expect(span).not.toBeNull();;
    });
  });