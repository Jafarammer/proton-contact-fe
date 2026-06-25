import { describe, it, expect, vi, beforeEach } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Register from "@/pages";
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
  it("should] render text", () => {
    renderWithRouter(<Register />);
    const title: string = "Proton Contact";
    const desc: string = "Efficiency. Reliabillity. Precision.";
    const titleForm: string = "Create an account";
    const descForm: string =
      "Manage your profesional network with calm control.";
    const textLink: string = "Already have an account ?";

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(desc)).toBeInTheDocument();
    expect(screen.getByText(titleForm)).toBeInTheDocument();
    expect(screen.getByText(descForm)).toBeInTheDocument();
    expect(screen.getByText(textLink)).toBeInTheDocument();
  });
});
