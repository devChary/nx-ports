import { renderHook } from '@testing-library/react';
import { useOutsideClick } from './outside-click';

describe('useOutsideClick hook', () => {
  test('should set isClickedOutside to true when clicked outside the element', () => {
    const ref = { current: document.createElement('div') };
    const { result } = renderHook(() =>
      useOutsideClick(ref as React.MutableRefObject<HTMLDivElement>)
    );

    expect(result.current).toBe(false);

    // Simulate a mousedown event outside the element
    document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

    expect(result.current).toBe(true);
  });

  test('should set isClickedOutside to false when clicked inside the element', () => {
    const ref = { current: document.createElement('div') };
    const { result } = renderHook(() =>
      useOutsideClick(ref as React.MutableRefObject<HTMLDivElement>)
    );

    expect(result.current).toBe(false);

    // Simulate a mousedown event inside the element
    ref.current.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

    expect(result.current).toBe(false);
  });
});
