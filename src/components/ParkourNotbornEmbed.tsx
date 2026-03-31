import { Gamepad2, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PARKOUR_NOTBORN_IFRAME = '/builds/parkour-notborn/index.html';

export default function ParkourNotbornEmbed() {
  const { t } = useLanguage();

  return (
    <div className="parkour-showcase glass-card overflow-hidden">
      <div className="border-b border-white/10 px-6 py-5 md:px-8">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
          <Gamepad2 className="h-3.5 w-3.5" />
          {t('projects.featuredBadge')}
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl text-left">
            <h3 className="text-3xl font-bold text-white md:text-4xl">
              {t('projects.featuredTitle')}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
              {t('projects.featuredDesc')}
            </p>
            <p className="mt-2 text-sm text-slate-400">
              {t('projects.featuredNote')}
            </p>
          </div>

          <a
            href={PARKOUR_NOTBORN_IFRAME}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-200"
          >
            {t('projects.featuredOpen')}
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="px-4 pb-4 pt-4 md:px-6 md:pb-6">
        <div className="parkour-preview-panel">
          <div className="parkour-preview-copy">
            <p className="text-sm leading-7 text-slate-300 md:text-base">
              {t('projects.featuredDesc')}
            </p>
            <p className="mt-2 text-sm text-slate-400">
              {t('projects.featuredNote')}
            </p>
          </div>
          <a
            href={PARKOUR_NOTBORN_IFRAME}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition-all hover:border-cyan-300/50 hover:bg-cyan-400/20"
          >
            {t('projects.featuredOpen')}
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
