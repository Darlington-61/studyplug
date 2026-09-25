import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
  onReset?: () => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null
  };

  public static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="max-w-2xl mx-auto my-10 p-6 sm:p-8 bg-white dark:bg-[#0E201B] rounded-3xl border border-slate-200 dark:border-emerald-800/40 shadow-md text-center space-y-4">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 flex items-center justify-center text-3xl">
            📑
          </div>
          <h2 className="text-xl font-black text-slate-900 dark:text-white">
            {this.props.fallbackTitle || 'Unable to display content'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
            A temporary display error occurred while rendering this view. Your saved progress is completely safe.
          </p>

          {this.state.error && (
            <details className="text-left bg-slate-50 dark:bg-[#071713] p-3 rounded-xl border border-slate-200 dark:border-emerald-900/50 text-[11px] text-slate-700 dark:text-emerald-200/90 font-mono overflow-x-auto">
              <summary className="cursor-pointer font-bold font-sans text-xs text-amber-700 dark:text-amber-400 select-none">
                View Diagnostic Details
              </summary>
              <div className="mt-2 text-rose-600 dark:text-rose-400 font-semibold">
                {this.state.error.name}: {this.state.error.message}
              </div>
              {this.state.error.stack && (
                <pre className="mt-1 text-[10px] text-slate-500 dark:text-slate-400 whitespace-pre-wrap max-h-36 overflow-y-auto">
                  {this.state.error.stack}
                </pre>
              )}
            </details>
          )}

          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={this.handleReset}
              className="px-5 py-2.5 rounded-xl bg-[#0E382B] text-[#FFCC00] text-xs font-black hover:bg-emerald-950 transition cursor-pointer shadow-sm"
            >
              🔄 Refresh View
            </button>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-emerald-950/60 dark:hover:bg-emerald-900 text-slate-700 dark:text-slate-200 text-xs font-bold transition cursor-pointer"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

