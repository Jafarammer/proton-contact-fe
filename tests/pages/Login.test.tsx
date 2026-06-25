import { describe, it, expect, vi, beforeEach } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../../src/pages/login";
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
  it("should render title, description and text link", () => {
    renderWithRouter(<Login />);

    const title: string = "Proton Contact";
    const description: string = "Scure precision for modern profesionals.";
    const textLink: string = "New to Proton Contact ?";

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByText(textLink)).toBeInTheDocument();
  });

  it("should render email input", () => {
    renderWithRouter(<Login />);
    const emailInput = screen.getByLabelText("Email Address");
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute("name", "email");
    expect(emailInput).toHaveAttribute("type", "email");
  });

  it("should render password input", () => {
    renderWithRouter(<Login />);
    const passwordInput = screen.getByLabelText("Password");
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveAttribute("name", "password");
    expect(passwordInput).toHaveAttribute("type", "password");
  });

  it("should render sign in button", () => {
    renderWithRouter(<Login />);
    const button = screen.getByRole("button", {
      name: /sign in/i,
    });

    expect(button).toBeInTheDocument();
    expect(screen.getByLabelText("icon-arrow")).toBeInTheDocument();
  });

  it("should render forgot password link", () => {
    renderWithRouter(<Login />);

    const forgotPasswordLink = screen.getByRole("link", {
      name: /forgot password?/i,
    });

    expect(forgotPasswordLink).toHaveAttribute("href", "/forgot-password");
  });

  it("should render register link", () => {
    renderWithRouter(<Login />);

    const registerLink = screen.getByRole("link", {
      name: /create an account/i,
    });

    expect(registerLink).toHaveAttribute("href", "/register");
  });
});

describe("USER EVENT", () => {
  it("should show password when eye icon is clicked", async () => {
    renderWithRouter(<Login />);

    const passwordInput = screen.getByLabelText(/password/i);

    await userEvent.type(passwordInput, "Secret123");

    expect(passwordInput).toHaveAttribute("type", "password");

    const eyeIcon = screen.getByLabelText("eye-invisible");

    await userEvent.click(eyeIcon);

    expect(passwordInput).toHaveAttribute("type", "text");
  });
});
