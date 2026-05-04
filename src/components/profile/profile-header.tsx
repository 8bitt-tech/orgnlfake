"use client";

import React from "react";
import { User, MapPin, Link as LinkIcon, Users, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialStats {
    followers?: number;
    engagement_rate?: string;
    total_reach?: number;
}

interface ProfileHeaderProps {
    username: string;
    bio?: string | null;
    avatarUrl?: string | null;
    stats?: SocialStats | null;
    tiktokStats?: SocialStats | null;
    className?: string;
}

export function ProfileHeader({ username, bio, avatarUrl, stats, tiktokStats, className }: ProfileHeaderProps) {
    return (
        <div className={cn("flex flex-col gap-8 md:flex-row md:items-start md:gap-12", className)}>
            {/* Avatar Section */}
            <div className="shrink-0 flex justify-center md:justify-start">
                <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-background shadow-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
                    {avatarUrl ? (
                        <img src={avatarUrl} alt={username} className="h-full w-full object-cover" />
                    ) : (
                        <div className="h-full w-full flex items-center justify-center text-white/50">
                            <User className="h-16 w-16" />
                        </div>
                    )}
                </div>
            </div>

            {/* Info Section */}
            <div className="flex-1 text-center md:text-left space-y-4">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight text-white mb-2">@{username}</h1>
                    {bio && (
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto md:mx-0">
                            {bio}
                        </p>
                    )}
                </div>

                {/* Stats Grid */}
                {(stats || tiktokStats) && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/10 mt-6">
                        {/* Followers */}
                        <div className="flex flex-col p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                            <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-4">Followers</span>
                            <div className="space-y-3">
                                {stats && (
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium text-white/50">Instagram</span>
                                        <span className="text-lg font-bold text-white">{stats.followers ? stats.followers.toLocaleString() : "—"}</span>
                                    </div>
                                )}
                                {tiktokStats && (
                                    <div className="flex justify-between items-center pt-3 border-t border-white/5">
                                        <span className="text-sm font-medium text-white/50">TikTok</span>
                                        <span className="text-lg font-bold text-white">{tiktokStats.followers ? tiktokStats.followers.toLocaleString() : "—"}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Engagement */}
                        <div className="flex flex-col p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                            <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-4">Engagement</span>
                            <div className="space-y-3">
                                {stats && (
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium text-white/50">Instagram</span>
                                        <span className="text-lg font-bold text-white">{stats.engagement_rate || "—"}</span>
                                    </div>
                                )}
                                {tiktokStats && (
                                    <div className="flex justify-between items-center pt-3 border-t border-white/5">
                                        <span className="text-sm font-medium text-white/50">TikTok</span>
                                        <span className="text-lg font-bold text-white">{tiktokStats.engagement_rate || "—"}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Reach */}
                        <div className="flex flex-col p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                            <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-4">Reach</span>
                            <div className="space-y-3">
                                {stats && (
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium text-white/50">Instagram</span>
                                        <span className="text-lg font-bold text-white">{stats.total_reach ? stats.total_reach.toLocaleString() : "—"}</span>
                                    </div>
                                )}
                                {tiktokStats && (
                                    <div className="flex justify-between items-center pt-3 border-t border-white/5">
                                        <span className="text-sm font-medium text-white/50">TikTok</span>
                                        <span className="text-lg font-bold text-white">{tiktokStats.total_reach ? tiktokStats.total_reach.toLocaleString() : "—"}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
