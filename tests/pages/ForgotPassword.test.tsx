import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ForgotPassword from "@/pages/forgotPassword";
import { renderWithRouter } from "../utils/renderWithRouter";

let mockLocationSearch = "";
const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual =
    await vi.importActual<typeof import("react-router-dom")>(
      "react-router-dom",
    );

  return {
    ...actual,
    useNavigate: () => mockNavigate,
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

  it("should render email input", () => {
    renderWithRouter(<ForgotPassword />);

    const emailInput = screen.getByLabelText("Email Address");
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute("name", "email");
    expect(emailInput).toHaveAttribute("type", "email");
  });

  it("should render send Intructions button", () => {
    renderWithRouter(<ForgotPassword />);

    const button = screen.getByRole("button", {
      name: /send Intructions/i,
    });

    expect(button).toBeInTheDocument();
    expect(screen.getByLabelText("icon-send")).toBeInTheDocument();
  });

  it("should render back to login button", () => {
    renderWithRouter(<ForgotPassword />);

    const button = screen.getByRole("button", {
      name: /back to login/i,
    });

    expect(button).toBeInTheDocument();
  });
});

describe("BEHAVIOR BUTTON", () => {
  it("should navigate to login page when back button is clicked", async () => {
    renderWithRouter(<ForgotPassword />);

    const button = screen.getByRole("button", {
      name: /back to login/i,
    });

    await userEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
