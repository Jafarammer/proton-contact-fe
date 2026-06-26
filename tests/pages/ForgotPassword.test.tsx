import { describe, it, expect, vi, beforeEach } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ForgotPassword from "@/pages/forgotPassword";
import { renderWithRouter } from "../utils/renderWithRouter";

let mockLocationSearch = "";

vi.mock("react-router-dom", async () => {
  const actual =
    await vi.importActual<typeof import("react-router-dom")>(
      "react-router-dom",
    );

  return {
    ...actual,
    useLocation: () => ({
      search: mockLocationSearch,
    }),
  };
});

beforeEach(() => {
  vi.clearAllMocks();
  mockLocationSearch = "";
});

describe("RENDER", () => {
  it("should render text", () => {
    renderWithRouter(<ForgotPassword />);
    const title: string = "Proton Contact";
    const titleForm: string = "Forgot Password ?";
    const descForm: string =
      "Enter your email address and we will send you instructions to reset your password.";

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(titleForm)).toBeInTheDocument();
    expect(screen.getByText(descForm)).toBeInTheDocument();
  });
});
